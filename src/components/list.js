(() => ({
    name: 'List',
    type: 'CONTENT_COMPONENT',
    icon: 'TitleIcon',
    orientation: 'HORIZONTAL',
    allowedTypes: [],
    jsx: (
      <div>
      {(() => {
        const [skip, setSkip] = useState(0);
        const take = parseInt(options.take, 10);

        return (
          <B.GetAll modelId={options.model} skip={0} take={take}>
        {({ loading, error, data, refetch }) => {
          if (B.env === 'dev') {
            return (
              <>
                <ul>
                  {[1, 2, 3, 4, 5].map(() => (
                    <li>Data item v6</li>
                  ))}
                </ul>
                <span className={classes.spacingRight}>x Items</span>
                <span className={classes.spacingRight}>x of x</span>
                <button type="button">Previous</button>
                <button type="button">Next</button>
              </>
            );
          }

          if (loading) {
            return (
              <ul>
                <li>Loading...</li>
              </ul>
            );
          }

          if (error) {
            return (
              <ul>
                <li>Error...</li>
              </ul>
            );
          }

          const { results, totalCount } = data;

          return (
            <>
              <ul>
                {results.map(result => (
                  <li>{result.name}</li>
                ))}
              </ul>
              <span className={classes.spacingRight}>
                {totalCount} Item{totalCount !== 1 ? 's' : ''}
              </span>
              <span className={classes.spacingRight}>
                {skip / take + 1} of {Math.ceil(totalCount / take)}
              </span>
              <button
                type="button"
                disabled={skip - take < 0}
                onClick={() => {
                  setSkip(skip - take);
                  refetch({ skip: skip, take: take });
                }}
              >
                Previous ({skip} - {take})
              </button>
              <button
                type="button"
                disabled={skip + take >= totalCount}
                onClick={() => {
                  setSkip(skip + take);
                  refetch({ skip: skip, take: take });
                }}
              >
                Next ({skip} + {take})
              </button>
            </>
          );
        }}
      </B.GetAll> 
      );
      })()}
    </div>
    ),
    styles: () => () => ({
      spacingRight: {
        marginRight: 10,
      },
    }),
  }))();
  