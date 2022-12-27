import React from 'react';
import { Text, TextProps } from 'react-native';
import { theme } from '../theme';

type AppTextType = TextProps & {
  fontFamily: 'bold' | 'regular' | 'light';
  size: 8 | 10 | 12;
};

export const AppText: React.FC<AppTextType> = ({
  children,
  fontFamily,
  style,
  ...props
}) => {
  const fontStyle = React.useMemo(() => {
    switch (fontFamily) {
      case 'bold':
        return { fontFamily: theme.fontFamilyBold };
      case 'light':
        return { fontFamily: theme.fontFamilyLight };
      case 'regular':
        return { fontFamily: theme.fontFamilyRegular };
    }
  }, [fontFamily]);

  return (
    <Text {...props} style={[style, fontStyle]}>
      {children}
    </Text>
  );
};
