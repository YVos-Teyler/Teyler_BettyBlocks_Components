(() => ({
    name: 'TimelineItem',
    type: 'CONTENT_COMPONENT',
    icon: 'TitleIcon',
    orientation: 'HORIZONTAL',
    allowedTypes: [],
    jsx: (() => {
      return <div className={classes.root}>
            <div className={classes.line}></div>
            <div className={classes.circle}></div>
            <div className={classes.line}></div>
        </div>;
    })(),
    styles: B => t => {
      const style = new B.Styling(t);
      return {
        root: {
            boxSizing: 'border-box',
            position: 'relative',
            height: '100%',
            margin: 0,
            padding: 0,
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: ({ options: {size} }) => `1fr ${size} 1fr`,
            placeItems: 'center',
        },
        line: {
            margin: 0,
            padding: 0,
            width: '1px',
            height: '100%',
            backgroundColor: ({ options: { color } }) => style.getColor(color),
        },
        circle: {
            margin: 0,
            padding: 0,
            width: ({ options: {size} }) => size,
            aspectRatio: 1/1,
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: ({ options: { color } }) => style.getColor(color),
            borderRadius: '50%',
        }
      };
    },
  }))();
  