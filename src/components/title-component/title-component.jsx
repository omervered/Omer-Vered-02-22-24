import * as Styles from "./title-component-styles";

export default function TitleComponent(props) {
  const { title, subtitle, size } = props;
  return (
    <Styles.TitleWrapper>
      <Styles.Title size={size}>{title}</Styles.Title>
      {subtitle && <Styles.Subtitle>{subtitle}</Styles.Subtitle>}
    </Styles.TitleWrapper>
  );
}

TitleComponent.defaultProps = {
  size: "2rem",
  title: "",
  subtitle: "",
};
