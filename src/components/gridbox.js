(() => ({
    name: 'Gridbox',
    type: 'CONTAINER_COMPONENT',
    allowedTypes: ['BODY_COMPONENT', 'CONTAINER_COMPONENT', 'CONTENT_COMPONENT'],
    orientation: 'HORIZONTAL',
    jsx: (() => {
      const { env, useText, useLogic } = B;
      const { Box } = window.MaterialUI.Core;
      const {
        alignment,
        backgroundColor,
        backgroundUrl: backgroundURLInput,
        borderColor,
        dataComponentAttribute,
        displayLogic,
        transparent,
        valignment,
        emptyPlaceHolderText,
      } = options;
      const isDev = env === 'dev';
      const hasBackgroundColor = backgroundColor !== 'Transparent';
      const hasBorderColor = borderColor !== 'Transparent';
      const backgroundURL = useText(backgroundURLInput);
      const [interactionBackground, setInteractionBackground] = useState('');
      const backgroundImage = interactionBackground || backgroundURL || null;
      const isEmpty = isDev && children.length === 0;
      const isPristine =
        isEmpty &&
        !hasBackgroundColor &&
        !hasBorderColor &&
        backgroundImage === null;
      const opac = transparent ? 0 : 1;
      const [opacity, setOpacity] = useState(opac);
      const logic = useLogic(displayLogic);
  
      useEffect(() => {
        B.defineFunction('setCustomBackgroundImage', (url) => {
          setInteractionBackground(url);
        });
  
        B.defineFunction('removeCustomBackgroundImage', () => {
          setInteractionBackground('');
        });
      }, []);
  
      const boxOptions = {
        display: 'grid',
        'data-component': useText(dataComponentAttribute) || 'GridBox',
      };
  
      const handleClick = () => {
        B.triggerEvent('OnClick');
      };
  
      const handleMouseEnter = (event) => {
        B.triggerEvent('OnMouseEnter', event);
      };
  
      const handleMouseLeave = (event) => {
        B.triggerEvent('OnMouseLeave', event);
      };
  
      const BoxCmp = (
        <Box
          className={[
            classes.root,
            isEmpty ? classes.empty : '',
            isPristine ? classes.pristine : '',
            !isPristine ? classes.background : '',
            !isPristine ? classes.border : '',
          ].join(' ')}
          {...boxOptions}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            ...(backgroundImage !== null && {
              backgroundImage: `url("${backgroundURL}")`,
            }),
            opacity,
          }}
        >
          {isPristine ? useText(emptyPlaceHolderText) : children}
        </Box>
      );
  
      useEffect(() => {
        if (isDev) {
          setOpacity(transparent ? 0 : 1);
        }
      }, [isDev, transparent]);
  
      B.defineFunction('ToOpaque', () => setOpacity(1));
      B.defineFunction('ToSemiTransparent', () => setOpacity(0.5));
      B.defineFunction('ToTransparent', () => setOpacity(0));
  
      if (!isDev && !logic) {
        return <></>;
      }
      return isDev ? <div className={classes.wrapper}>{BoxCmp}</div> : BoxCmp;
    })(),
    styles: (B) => (theme) => {
      const { color: colorFunc, env, mediaMinWidth, Styling } = B;
      const style = new Styling(theme);
      const isDev = env === 'dev';
      const getColorAlpha = (col, val) => colorFunc.alpha(col, val);
      const getSpacing = (idx, device = 'Mobile') =>
        idx === '0' ? '0rem' : style.getSpacing(idx, device);
  
      return {
        wrapper: {
          boxSizing: 'border-box',
          height: ({ options: { height } }) => height,
          minHeight: 0,
          position: ({ options: { position } }) => position === 'fixed' && isDev ? 'absolute' : position,
          top: ({ options: { top } }) => top,
          right: ({ options: { right } }) => right,
          bottom: ({ options: { bottom } }) => bottom,
          left: ({ options: { left } }) => left,
          width: ({ options: { width } }) => width,
         
          gap: ({ options: {gap} }) => gap,
        },
        root: {
          boxSizing: 'border-box',
          display: 'grid',
          gridTemplateColumns: ({ options: { gridType, numberOfColumns, autofitMaxWidth, gridTemplateColumns } }) => 
          gridType === 'Even columns' ? `repeat(${numberOfColumns}, 1fr)` : (
            gridType === 'Autofit' ? `repeat(auto-fit, minmax(min(${autofitMaxWidth}, 100%), 1fr))` :
                gridTemplateColumns),


          gridTemplateRows: ({ options: { gridType, gridTemplateRows } }) => 
            gridType === 'Custom' ? gridTemplateRows : '',
          justifyItems: ({ options: { alignment } }) => alignment,
          alignItems: ({ options: { valignment } }) => valignment,
          gap: ({ options: {gap} }) => gap,

          height: ({ options: { height } }) => (isDev ? '100%' : height),
          minHeight: 0,
          position: ({ options: { position } }) => (!isDev && position) || 'unset',
          top: ({ options: { top } }) => !isDev && top,
          right: ({ options: { right } }) => !isDev && right,
          bottom: ({ options: { bottom } }) => !isDev && bottom,
          left: ({ options: { left } }) => !isDev && left,
          width: ({ options: { width } }) => !isDev && width,
          transition: 'opacity 0.5s ease-out',
          marginTop: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[0]),
          marginRight: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[1]),
          marginBottom: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[2]),
          marginLeft: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[3]),
          paddingTop: ({ options: { innerSpacing } }) => getSpacing(innerSpacing[0]),
          paddingRight: ({ options: { innerSpacing } }) => getSpacing(innerSpacing[1]),
          paddingBottom: ({ options: { innerSpacing } }) => getSpacing(innerSpacing[2]),
          paddingLeft: ({ options: { innerSpacing } }) => getSpacing(innerSpacing[3]),
          [`@media ${mediaMinWidth(600)}`]: {
            marginTop: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[0], 'Portrait'),
            marginRight: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[1], 'Portrait'),
            marginBottom: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[2], 'Portrait'),
            marginLeft: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[3], 'Portrait'),
            paddingTop: ({ options: { innerSpacing } }) => getSpacing(innerSpacing[0], 'Portrait'),
            paddingRight: ({ options: { innerSpacing } }) => getSpacing(innerSpacing[1], 'Portrait'),
            paddingBottom: ({ options: { innerSpacing } }) => getSpacing(innerSpacing[2], 'Portrait'),
            paddingLeft: ({ options: { innerSpacing } }) => getSpacing(innerSpacing[3], 'Portrait'),
          },
          [`@media ${mediaMinWidth(960)}`]: {
            marginTop: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[0], 'Landscape'),
            marginRight: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[1], 'Landscape'),
            marginBottom: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[2], 'Landscape'),
            marginLeft: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[3], 'Landscape'),
            paddingTop: ({ options: { innerSpacing } }) => getSpacing(innerSpacing[0], 'Landscape'),
            paddingRight: ({ options: { innerSpacing } }) => getSpacing(innerSpacing[1], 'Landscape'),
            paddingBottom: ({ options: { innerSpacing } }) => getSpacing(innerSpacing[2], 'Landscape'),
            paddingLeft: ({ options: { innerSpacing } }) => getSpacing(innerSpacing[3], 'Landscape'),
          },
          [`@media ${mediaMinWidth(1280)}`]: {
            marginTop: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[0], 'Desktop'),
            marginRight: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[1], 'Desktop'),
            marginBottom: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[2], 'Desktop'),
            marginLeft: ({ options: { outerSpacing } }) => getSpacing(outerSpacing[3], 'Desktop'),
            paddingTop: ({ options: { innerSpacing } }) => getSpacing(innerSpacing[0], 'Desktop'),
            paddingRight: ({ options: { innerSpacing } }) => getSpacing(innerSpacing[1], 'Desktop'),
            paddingBottom: ({ options: { innerSpacing } }) => getSpacing(innerSpacing[2], 'Desktop'),
            paddingLeft: ({ options: { innerSpacing } }) => getSpacing(innerSpacing[3], 'Desktop'),
          },
          gap: ({ options: {gap} }) => gap,
        },
        background: {
          backgroundColor: ({ options: { backgroundColor, backgroundColorAlpha }, }) =>
            backgroundColor === 'Transparent'
              ? style.getColor(backgroundColor)
              : getColorAlpha(style.getColor(backgroundColor), backgroundColorAlpha / 100),
          backgroundSize: ({ options: { backgroundSize } }) => backgroundSize,
          backgroundPosition: ({ options: { backgroundPosition } }) => backgroundPosition,
          backgroundRepeat: ({ options: { backgroundRepeat } }) => backgroundRepeat,
          backgroundAttachment: ({ options: { backgroundAttachment } }) => backgroundAttachment,
        },
        border: {
          borderWidth: ({ options: { borderWidth, borderStyle, borderColor } }) =>
            borderWidth && borderStyle && borderColor ? borderWidth : 0,
          borderStyle: ({ options: { borderStyle } }) => borderStyle,
          borderColor: ({ options: { borderColor } }) => style.getColor(borderColor),
          borderRadius: ({ options: { borderRadius } }) => borderRadius,
        },
        empty: {
          display: ['grid', '!important'],
          placeItems: ['center', '!important'],
          height: ['2.5rem', '!important'],
          fontSize: '0.75rem',
          color: '#262A3A',
          textTransform: 'uppercase',
        },
        pristine: {
          display: ['grid', '!important'],
          placeItems: ['center', '!important'],
          borderWidth: '0.0625rem',
          borderColor: '#AFB5C8',
          borderStyle: 'dashed',
          backgroundColor: '#F0F1F5',
        },
      };
    },
  }))();
  