(() => ({
    name: 'ChipWithLogic',
    type: 'CONTENT_COMPONENT',
    allowedTypes: [],
    orientation: 'HORIZONTAL',
    jsx: (() => {
      const { Chip, Avatar } = window.MaterialUI.Core;
      const { env, useText, Icon } = B;
      const {
        label,
        disabled,
        variant,
        startIcon,
        avatar,
        imgUrl,
        avatarType,
        size,
        dataComponentAttribute,
        hover,
        backgroundColor
      } = options;
      const isDev = env === 'dev';
  
      const imgSrc = imgUrl && useText(imgUrl);
      const AvatarImage = <Avatar alt="" src={imgSrc} />;
      const AvatarText = <Avatar>{avatar}</Avatar>;
      let AvatarComponent;
      if (avatarType === 'text') {
        AvatarComponent = AvatarText;
      } else if (avatarType === 'image') {
        AvatarComponent = AvatarImage;
      }

      const colorVariables = ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'accent-1', 'accent-2', 'accent-3', 'transparant', 'white', 'light', 'medium', 'dark', 'blakck' ]

      const parsedBackgroundColor = colorVariables.includes(useText(backgroundColor).toLowerCase().replace(' ', '-')) ?
        `var(--${useText(backgroundColor).toLowerCase().replace(' ', '-')})` : 
        useText(backgroundColor) 

      const ChipComponent = (
        <Chip
          className={[
            classes.root,
            classes.chip,
            hover ? classes.hover : ''
          ].join(' ')}
          label={useText(label)}
          disabled={disabled}
          variant={variant}
          icon={
            avatarType === 'icon' && startIcon !== 'None' ? (
              <Icon name={startIcon} />
            ) : undefined
          }
          avatar={AvatarComponent}
          size={size}
          data-component={useText(dataComponentAttribute) || 'Chip'}
          style={{ '--background-color': (isDev ? 'var(--primary)' : parsedBackgroundColor )}}
        />
      );
      return isDev ? (
        <div className={classes.wrapper} >{ChipComponent}</div>
      ) : (
        ChipComponent
      );
    })(),
    styles: (B) => (theme) => {
      const { mediaMinWidth, Styling } = B;
      const style = new Styling(theme);
      const convertSizes = (sizes) =>
        sizes.map((size) => style.getSpacing(size)).join(' ');
      return {
        wrapper: {
          display: 'inline-block',
          '& $root': {
            '& .MuiChip-label': {
              fontSize: ({ options: { font } }) => style.getFontSize(font),
              fontFamily: ({ options: { font } }) => style.getFontFamily(font),
  
              [`@media ${mediaMinWidth(600)}`]: {
                fontSize: ({ options: { font } }) =>
                  style.getFontSize(font, 'Portrait'),
  
                [`@media ${mediaMinWidth(600)}`]: {
                  fontSize: ({ options: { font } }) =>
                    style.getFontSize(font, 'Portrait'),
                },
                [`@media ${mediaMinWidth(960)}`]: {
                  fontSize: ({ options: { font } }) =>
                    style.getFontSize(font, 'Landscape'),
                },
                [`@media ${mediaMinWidth(1280)}`]: {
                  fontSize: ({ options: { font } }) =>
                    style.getFontSize(font, 'Desktop'),
                },
              },
              [`@media ${mediaMinWidth(960)}`]: {
                fontSize: ({ options: { font } }) =>
                  style.getFontSize(font, 'Landscape'),
              },
              [`@media ${mediaMinWidth(1280)}`]: {
                fontSize: ({ options: { font } }) =>
                  style.getFontSize(font, 'Desktop'),
              },
            },
          },
        },
        root: {
          margin: ({ options: { margin } }) => convertSizes(margin),
          color: ({ options: { textColor } }) => [
            style.getColor(textColor),
            '!important',
          ],
  
          '& .MuiChip-icon': {
            color: ({ options: { textColor } }) => [
              style.getColor(textColor),
              '!important',
            ],
            height: ({ options: { size } }) => size === 'small' && '0.75em',
          },
          '& .MuiChip-label': {
            fontSize: ({ options: { font } }) => style.getFontSize(font),
            fontFamily: ({ options: { font } }) => style.getFontFamily(font),
  
            [`@media ${mediaMinWidth(600)}`]: {
              fontSize: ({ options: { font } }) =>
                style.getFontSize(font, 'Portrait'),
  
              [`@media ${mediaMinWidth(600)}`]: {
                fontSize: ({ options: { font } }) =>
                  style.getFontSize(font, 'Portrait'),
              },
              [`@media ${mediaMinWidth(960)}`]: {
                fontSize: ({ options: { font } }) =>
                  style.getFontSize(font, 'Landscape'),
              },
              [`@media ${mediaMinWidth(1280)}`]: {
                fontSize: ({ options: { font } }) =>
                  style.getFontSize(font, 'Desktop'),
              },
            },
            [`@media ${mediaMinWidth(960)}`]: {
              fontSize: ({ options: { font } }) =>
                style.getFontSize(font, 'Landscape'),
            },
            [`@media ${mediaMinWidth(1280)}`]: {
              fontSize: ({ options: { font } }) =>
                style.getFontSize(font, 'Desktop'),
            },
          },
        },
        chip: { 
          '--primary': style.getColor('Primary'),
          '--secondary': style.getColor('Secondary'),
          '--danger': style.getColor('Danger'),
          '--success': style.getColor('Success'),
          '--info': style.getColor('Info'),
          '--warning': style.getColor('Warning'),
          '--accent-1': style.getColor('Accent 1'),
          '--accent-2': style.getColor('Accent 2'),
          '--accent-3': style.getColor('Accent 3'),
          '--transparant': style.getColor('Transparant'),
          '--white': style.getColor('White'),
          '--light': style.getColor('Light'),
          '--medium': style.getColor('Medium'),
          '--dark': style.getColor('Dark'),
          '--black': style.getColor('Black'),
          '--background-color' : 'var(--primary)',
          backgroundColor: ['var(--background-color)', '!important']
        },
        hover: {
          cursor: ['pointer', '!important'],
          transition: 'scale 200ms ease-in-out',
          '&:hover': { 
            scale: 1.05,
           }
        }
      };
    },
  }))();
  