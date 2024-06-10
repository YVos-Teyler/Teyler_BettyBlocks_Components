(() => ({
  name: 'CapacityChart',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (
    <span>
      {(() => {
        const { env, useText, Link: BLink, useAllQuery, useFilter, getProperty } = B;
        const isDev = env === 'dev';
        const { Chart } = window
        const {
          title,
          chartType
        } = options

        const makeId = (length = 16) => {
          let result = '';
          const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          const charactersLength = characters.length;
          for (let i = 0; i < length; i += 1) {
            result += characters.charAt(
              Math.floor(Math.random() * charactersLength),
            );
          }
          return result;
        };
        const componentId = makeId()

        const { model, filter, order, orderBy, displayError } = options;
        const where = useFilter(filter);

        const [chart, setChart] = useState({});
        const [datasets, setDatasets] = useState([]);
        
        let orderByPath = null;
        if (orderBy && Array.isArray(orderBy.id)) {
          orderByPath = orderBy.id;
        } else if (orderBy && orderBy.id) {
          orderByPath = [orderBy.id];
        }
        const sort =
          !isDev && orderByPath
            ? orderByPath.reduceRight((acc, property, index) => {
                const prop = getProperty(property);
                return index === orderByPath.length - 1
                  ? { [prop.name]: order.toUpperCase() }
                  : { [prop.name]: acc };
              }, {})
            : {};

        const { loading, error, data: modelData, refetch } =
          model &&
          !isDev &&
          useAllQuery(model, {
            rawFilter: where,
            skip: 0,
            take: 200,
            variables: {
              ...(orderByPath ? { sort: { relation: sort } } : {}),
            },
            onCompleted(res) {
              const hasResult = res && res.results && res.results.length > 0;
              if (hasResult) {
                B.triggerEvent('onSuccess', res.results);
                console.log('data', modelData)
                processData(modelData.results)
              } else {
                B.triggerEvent('onNoResults');
              }
            },
            onError(resp) {
              if (!displayError) {
                B.triggerEvent('onError', resp);
              }
            },
          });

        const processData = (results) => {
          const { name: labelPropertyName } = B.getProperty(options.labelProperty);
          const { name: valuePropertyName } = B.getProperty(options.valueProperty);
          const { name: datasetPropertyName } = B.getProperty(options.datasetProperty);
          const { name: datasetTypePropertyName } = B.getProperty(options.datasetTypeProperty);
          const { name: axisIDPropertyName } = B.getProperty(options.axisIDProperty);
          const { name: axisPositionPropertyName } = B.getProperty(options.axisPositionProperty);
          const { name: axisStackedPropertyName } = B.getProperty(options.axisStackedProperty);
          const { name: datasetStackPropertyName } = B.getProperty(options.datasetStackProperty);

          const datasets = Object.groupBy(results, (item) => {
            return item[datasetPropertyName] || item.dataset[datasetPropertyName] || 'data'
          })

          let result = []
          for (const [key, value] of Object.entries(datasets)) {
            result.push({
              label: key,
              type: value[0].dataset[datasetTypePropertyName] || value[0][datasetTypePropertyName] || chartType,
              yAxisID: value[0].dataset.axis[axisIDPropertyName] || value[0].dataset[axisIDPropertyName] || value[0][axisIDPropertyName] || 'y',
              axisPosition: value[0].dataset.axis[axisPositionPropertyName] || value[0].dataset[axisPositionPropertyName] || value[0][axisPositionPropertyName] || 'left',
              axisStacked: value[0].dataset.axis[axisStackedPropertyName] || value[0].dataset[axisStackedPropertyName] || value[0][axisStackedPropertyName] || 'y',
              data: value.map((item) => { 
                return { 
                  x: item[labelPropertyName] || item.calendar[labelPropertyName],
                  y: item[valuePropertyName]
                }
              }),
              stack: value[0].dataset[datasetStackPropertyName] || value[0][datasetStackPropertyName] || 'y'
            })
          }
          console.log('processed data', result)
          setDatasets(result)
        }

        const getLabels = (datasets) => {
          let labelSet = new Set()
          datasets.forEach((dataset) => {
            dataset.data.forEach((data) => {
              labelSet.add(data.x)
            })
          })
          const labelArray = Array.from(labelSet)
          return labelArray
        } 

        const getScales = (datasets) => {
          let scales = {}
          datasets.forEach((dataset) => {
            if (!scales[dataset.yAxisID]) { 
              const scaleSettings = {
                display: true,
                position: dataset.axisPosition || 'left',
                stacked: dataset.axisStacked || false,
                min: 0
              }
              scales[dataset.yAxisID] = scaleSettings
            }
            
          })
          return scales
        }

        const datasetsDev = [{
          label: 'dev data',
          data: [
            { x: 2010, y: 10 },
            { x: 2011, y: 20 },
            { x: 2012, y: 15 },
            { x: 2013, y: 25 },
            { x: 2014, y: 22 },
            { x: 2015, y: 30 },
            { x: 2016, y: 28 }
          ]
        }]

        const initChart = (chart, chartTitle, chartType, chartDatasets) => {
          const scales = getScales(chartDatasets)
          const newChart = new Chart(
            document.getElementById(componentId),
            {
              type: chartType,
              data: {
                labels: getLabels(chartDatasets),
                datasets: chartDatasets
              },
              options: {
                plugins: {
                  title: {
                    display: true,
                    text: chartTitle
                  }
                },
                scales: {
                  x: {
                    display: true,
                    stacked: true,
                    offset: true
                  },
                  y: {
                    display: true,
                    position: 'left',
                    stacked: true,
                    min: 0
                  },
                  y1: {
                    display: true,
                    grid: { drawOnChartArea: false },
                    position: 'right',
                    stacked: true,
                    min: 0
                  }
                }
              }
            }
          )
          setChart(newChart)
        }

        const updateChart = (chart, chartTitle, chartType, chartDatasets) => {
          chart.config.options.plugins.title.text = chartTitle
          chart.config.type = chartType
          chart.config.data.datasets = chartDatasets
          chart.config.data.labels = getLabels(chartDatasets)
          chart.config.options.scales = getScales(chartDatasets)
          chart.update()
          console.log('chart', chart)
        }

        useEffect(() => {
          const isChart = !!chart.config

          if (isDev) {
            if (isChart) { updateChart(chart, title, chartType, datasetsDev) }
            if (!isChart) { initChart(chart, title, chartType, datasetsDev) }
          }
          if (!isDev) {
            if (isChart) { updateChart(chart, title, chartType, datasets) }
            if (!isChart) { initChart(chart, title, chartType, datasets) }
          }

        }, [title, chartType, datasets])

        const classes = ["chart-container"]
        if (isDev) { classes.push("chart-dimensions-dev") }

        return (
          <>
            <div className={classes.join(' ')}>
              <canvas id={componentId}></canvas>
            </div>
          </>
        );
      })()}
    </span>
  ),
  styles: (B) => (t) => {
    const { mediaMinWidth, Styling } = B;
    const style = new Styling(t);
    const getSpacing = (idx, device = 'Mobile') =>
      idx === '0' ? '0rem' : style.getSpacing(idx, device);

    return {
      content: {
        display: 'block',
        marginTop: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[0]),
        marginRight: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[1]),
        marginBottom: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[2]),
        marginLeft: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[3]),
        textAlign: ({ options: { textAlignment } }) => textAlignment,
        padding: 0,
        whiteSpace: 'pre-wrap',
        color: ({ options: { textColor, type } }) => { return textColor === '[Inherit]' ? style.getFontColor(type) : style.getColor(textColor); },
        fontFamily: ({ options: { type } }) => `var(--text-fontFamily-${type.toString().toLowerCase()})`,
        fontSize: ({ options: { type } }) => `var(--text-fontSize-${type.toString().toLowerCase()})`,
        fontStyle: ({ options: { type } }) => `var(--text-fontStyle-${type.toString().toLowerCase()})`,
        fontWeight: ({ options }) => { return options.fontWeight === '[Inherit]' ? style.getFontWeight(options.type) : options.fontWeight; },
        textTransform: ({ options: { type } }) => style.getTextTransform(type),
        letterSpacing: ({ options: { type } }) => style.getLetterSpacing(type),
        [`@media ${mediaMinWidth(600)}`]: {
          marginTop: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[0], 'Portrait'),
          marginRight: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[1], 'Portrait'),
          marginBottom: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[2], 'Portrait'),
          marginLeft: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[3], 'Portrait'),
          fontSize: ({ options: { type } }) => style.getFontSize(type, 'Portrait'),
        },
        [`@media ${mediaMinWidth(960)}`]: {
          marginTop: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[0], 'Landscape'),
          marginRight: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[1], 'Landscape'),
          marginBottom: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[2], 'Landscape'),
          marginLeft: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[3], 'Landscape'),
          fontSize: ({ options: { type } }) => style.getFontSize(type, 'Landscape'),
        },
        [`@media ${mediaMinWidth(1280)}`]: {
          marginTop: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[0], 'Desktop'),
          marginRight: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[1], 'Desktop'),
          marginBottom: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[2], 'Desktop'),
          marginLeft: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[3], 'Desktop'),
          fontSize: ({ options: { type } }) => style.getFontSize(type, 'Desktop'),
        },
      },
      nowrap: {
        whiteSpace: 'nowrap',
        marginBottom: '-4px',
      },
      link: {
        textDecoration: ['none', '!important'],
        color: ['inherit', '!important'],
      },
      placeholder: {
        color: '#dadde4',
      },
      'chart-dimensions-dev': {
        maxWidth: '50rem',
        aspectRatio: '1/2'
      }
    };
  },
}))();
