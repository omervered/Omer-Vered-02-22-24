import * as Styles from "./title-component-styles";

export default function TitleComponent(props) {
  const { title, subtitle, titleSize, subtitleSize } = props;
  return (
    <Styles.TitleWrapper>
      <Styles.Title titleSize={titleSize}>{title}</Styles.Title>
      {subtitle && <Styles.Subtitle subtitleSize={subtitleSize}>{subtitle}</Styles.Subtitle>}
    </Styles.TitleWrapper>
  );
}

TitleComponent.defaultProps = {
  title: "",
  titleSize: "2rem",
  subtitle: "",
  subtitleSize: "1.5rem",
};
