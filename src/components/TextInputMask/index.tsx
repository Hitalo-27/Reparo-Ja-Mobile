import React from "react";
import { styles,} from "./styles";
import { TextInputMaskProps} from "react-native-masked-text";
import { Mask } from "./styles";

export function InputMask({ ...rest }: TextInputMaskProps | any) {
  return (
    <Mask placeholderTextColor="#a9a9a9" style={styles.container} {...rest} />
  );
}
