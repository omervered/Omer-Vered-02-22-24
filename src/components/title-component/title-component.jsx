import * as Styles from "./title-component-styles";

export default function TitleComponent(props) {
  const { title, subtitle } = props;
  return (
    <Styles.TitleWrapper>
      <Styles.Title>{title}</Styles.Title>
      {subtitle && <Styles.Subtitle>{subtitle}</Styles.Subtitle>}
    </Styles.TitleWrapper>
  );
}

TitleComponent.defaultProps = {
  title: "",
  subtitle: "",
};
