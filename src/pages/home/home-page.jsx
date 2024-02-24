import AutoCompleteComponent from "../../components/auto-complete/auto-complete-component";
import TitleComponent from "../../components/title-component/title-component";

import * as Styles from "./home-page-styles";

export default function HomePage() {
  return (
    <Styles.HomePage>
      <AutoCompleteComponent label={"City Name"} placeholder={"Start typing your desired location..."} />
      <Styles.HomePageContainer></Styles.HomePageContainer>
    </Styles.HomePage>
  );
}
