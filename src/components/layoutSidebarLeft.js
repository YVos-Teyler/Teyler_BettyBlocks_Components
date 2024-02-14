(() => ({
  name: 'LayoutSidebarLeft',
  type: 'BODY_COMPONENT',
  allowedTypes: ['LAYOUT_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (
    <div className={classes.container}>
      {(() => {
        const { env, useText } = B;
        const { dataComponentAttribute } = options;
        const isDev = env === 'dev';
        const isEmpty = children.length === 0;
        const isPristine = isEmpty && isDev;

        return (
          <section
            className={[
              classes.row,
              isEmpty ? classes.empty : '',
              isPristine ? classes.pristine : '',
            ].join(' ')}
            data-component={useText(dataComponentAttribute) || 'Row'}
          >
            {isPristine ? 'Row' : children}
          </section>
        );
      })()}
    </div>
  ),
  styles: (B) => (theme) => {
    const { mediaMinWidth, Styling } = B;
    const style = new Styling(theme);
    const width = {
      Full: '100%',
      XL: '1200px',
      L: '960px',
      M: '720px',
      S: '540px',
    };
    const getSpacing = (idx, device = 'Mobile') =>
      idx === '0' ? '0rem' : style.getSpacing(idx, device);

    return {
      container: {
        width: '100%',
        height: ({ options: { rowHeight } }) => rowHeight || 'auto',
        backgroundColor: ({ options: { backgroundColor } }) =>
          backgroundColor === 'transparent'
            ? 'transparent'
            : style.getColor(backgroundColor),
        backgroundImage: 'none',
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderWidth: 0,
        borderColor: 'transparent',
        borderStyle: 'none',
        borderRadius: 0,
        boxSizing: 'border-box',
        marginTop: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[0]),
        marginRight: ({ options: { outerSpacing, maxRowWidth } }) =>
          maxRowWidth !== 'Full' ? 'auto' : getSpacing(outerSpacing[1]),
        marginBottom: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[2]),
        marginLeft: ({ options: { outerSpacing, maxRowWidth } }) =>
          maxRowWidth !== 'Full' ? 'auto' : getSpacing(outerSpacing[3]),
      },
      row: {
        '--main-min-width': ({ options: { mainWidth } }) => (mainWidth ? mainWidth : '750px'),
        '--sidebar-size': ({ options: { sidebarWidth } }) => (sidebarWidth ? sidebarWidth : '250px'),
        '--gap': ({ options: { gap } }) => (gap ? gap : '1rem'), 
        
        boxSizing: 'border-box',
        height: '100%',
        display: 'flex',
        gap: 'var(--gap)',
        flexWrap: 'wrap',
        overflowY: ({ options: { sidebarFixed } }) => (sidebarFixed ? 'hidden' : 'initial'),
        '& > *': {
          flexGrow: '1',
        },
        '& > :first-child': {
          flexBasis: 'var(--sidebar-size)',
        },
        '& > :last-child': {
          flexGrow: '999',
          flexBasis: 'calc((var(--main-min-width) - (100% - var(--sidebar-size) - var(--gap))) * 9999)',
          height: ({ options: { sidebarFixed } }) => (sidebarFixed ? '100%' : 'auto'),
          overflowY: ({ options: { sidebarFixed } }) => (sidebarFixed ? 'auto' : 'initial'),
        }
      },
      empty: {
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: ({ options: { rowHeight } }) => (rowHeight ? 0 : '4rem'),
        height: '100%',
        fontSize: '0.75rem',
        color: '#262A3A',
        textTransform: 'uppercase',
      },
      pristine: {
        borderWidth: '0.0625rem',
        borderColor: '#AFB5C8',
        borderStyle: 'dashed',
        backgroundColor: '#F0F1F5',
      },
    };
  },
}))();
