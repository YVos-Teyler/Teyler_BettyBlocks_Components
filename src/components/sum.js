(() => ({
    name: 'Sum',
    type: 'CONTENT_COMPONENT',
    allowedTypes: [],
    orientation: 'HORIZONTAL',
    jsx: (
        <span>
            {(() => {
                const { useInnerHtml } = options;
                const { env, useText, Link: BLink } = B;
                const isDev = env === 'dev';

                const Tag = useInnerHtml
                    ? 'div'
                    : {
                        Title1: 'h1',
                        Title2: 'h2',
                        Title3: 'h3',
                        Title4: 'h4',
                        Title5: 'h5',
                        Title6: 'h6',
                        Body1: 'p',
                        Body2: 'p',
                    }[options.type || 'Body1'];

                return (
                    <B.GetAll modelId={options.model} filter={options.filter} skip={0} take={200}>
                      
                        {({ loading, error, data, refetch }) => {
                            if (isDev) {
                                return <Tag class={classes.placeholder}>Sum</Tag>
                            }

                            if (loading) {
                                return <Tag class={classes.content}>Loading...</Tag>
                            }

                            if (error) {
                                return <Tag class={classes.content}>Error...</Tag>
                            }

                            B.defineFunction('Refetch', () => {
                              refetch();
                            });

                            const { kind, modelId, name } = B.getProperty(options.property);
                            const { results, totalCount } = data;

                            const result = '';
                            if (totalCount > 200) { result = `Collection to big (${totalcount}/200 items).` }
                            else if (name) { result = results.reduce((partialSum, item) => partialSum + item[name], 0) }
                            else { result = `No property selected.` }
                            
                            return <Tag class={classes.content}>{result}</Tag>
                        }}
                    </B.GetAll> 
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
          marginTop: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[0]),
          marginRight: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[1]),
          marginBottom: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[2]),
          marginLeft: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[3]),
          textAlign: ({ options: { textAlignment } }) => textAlignment,
          padding: 0,
          whiteSpace: 'pre-wrap',
          color: ({ options: { textColor, type } }) => {
            return textColor === '[Inherit]'
              ? style.getFontColor(type)
              : style.getColor(textColor);
          },
          fontFamily: ({ options: { type } }) =>
            `var(--text-fontFamily-${type.toString().toLowerCase()})`,
          fontSize: ({ options: { type } }) =>
            `var(--text-fontSize-${type.toString().toLowerCase()})`,
          fontStyle: ({ options: { type } }) =>
            `var(--text-fontStyle-${type.toString().toLowerCase()})`,
          fontWeight: ({ options }) => {
            return options.fontWeight === '[Inherit]'
              ? style.getFontWeight(options.type)
              : options.fontWeight;
          },
          textTransform: ({ options: { type } }) => style.getTextTransform(type),
          letterSpacing: ({ options: { type } }) => style.getLetterSpacing(type),
          [`@media ${mediaMinWidth(600)}`]: {
            marginTop: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[0], 'Portrait'),
            marginRight: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[1], 'Portrait'),
            marginBottom: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[2], 'Portrait'),
            marginLeft: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[3], 'Portrait'),
            fontSize: ({ options: { type } }) =>
              style.getFontSize(type, 'Portrait'),
          },
          [`@media ${mediaMinWidth(960)}`]: {
            marginTop: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[0], 'Landscape'),
            marginRight: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[1], 'Landscape'),
            marginBottom: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[2], 'Landscape'),
            marginLeft: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[3], 'Landscape'),
            fontSize: ({ options: { type } }) =>
              style.getFontSize(type, 'Landscape'),
          },
          [`@media ${mediaMinWidth(1280)}`]: {
            marginTop: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[0], 'Desktop'),
            marginRight: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[1], 'Desktop'),
            marginBottom: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[2], 'Desktop'),
            marginLeft: ({ options: { outerSpacing } }) =>
              getSpacing(outerSpacing[3], 'Desktop'),
            fontSize: ({ options: { type } }) =>
              style.getFontSize(type, 'Desktop'),
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
      };
    },
  }))();
  