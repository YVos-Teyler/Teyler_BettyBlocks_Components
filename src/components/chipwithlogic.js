(() => ({
    name: 'ChipWithLogic',
    type: 'CONTENT_COMPONENT',
    allowedTypes: [],
    orientation: 'HORIZONTAL',
    jsx: (() => {
      const { Chip, Avatar } = window.MaterialUI.Core;
      const { env, useText, useProperty, Icon } = B;
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
        property,
        hover,
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

      const styleClasses = ['Transparant', 'White', 'Light', 'Medium', 'Dark', 'Black', 'Primary', 'Secundary', 'Success', 'Info', 'Warning', 'Danger', 'Accent 1', 'Accent 2', 'Accent 3']
      

      const ChipComponent = (
        <Chip
          className={[
            classes.root,
            classes.chip,
            hover ? classes.hover : '',
            !isDev && styleClasses.includes(useProperty(property)) ? classes[useProperty(property).toLowerCase().replace(' ', '')] : '',
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
        />
      );
      return isDev ? (
        <div className={classes.wrapper}>{ChipComponent}</div>
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
          backgroundColor: ({ options: { color } }) => [ style.getColor(color), '!important', ], 
        },
        hover: {
          cursor: ['pointer', '!important'],
          transition: 'scale 200ms ease-in-out',
          '&:hover': { 
            scale: 1.05,
           }
        },

        transparant: { backgroundColor: () => [ style.getColor('Transparant'), '!important', ] },
        white: { backgroundColor: () => [ style.getColor('White'), '!important', ] },
        light: { backgroundColor: () => [ style.getColor('Light'), '!important', ] },
        medium: { backgroundColor: () => [ style.getColor('Medium'), '!important', ] },
        dark: { backgroundColor: () => [ style.getColor('Dark'), '!important', ] },
        black: { backgroundColor: () => [ style.getColor('Black'), '!important', ] },
        primary: { backgroundColor: () => [ style.getColor('Primary'), '!important', ] },
        secundary: { backgroundColor: () => [ style.getColor('Secundary'), '!important', ] },
        success: { backgroundColor: () => [ style.getColor('Success'), '!important', ] },
        info: { backgroundColor: () => [ style.getColor('Info'), '!important', ] },
        warning: { backgroundColor: () => [ style.getColor('Warning'), '!important', ] },
        danger: { backgroundColor: () => [ style.getColor('Danger'), '!important', ] },
        accent1: { backgroundColor: () => [ style.getColor('Accent 1'), '!important', ] },
        accent2: { backgroundColor: () => [ style.getColor('Accent 2'), '!important', ] },
        accent3: { backgroundColor: () => [ style.getColor('Accent 3'), '!important', ] },

      };
    },
  }))();
  