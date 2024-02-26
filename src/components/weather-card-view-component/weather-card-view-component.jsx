import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";

import { getWeekday } from "../../utils/utils";

import * as Styles from "./weather-card-view-component-styles";

export default function WeatherCardViewComponent(props) {
  const { day } = props;
  const { Date, Day, Night, Temperature, MobileLink, Link } = day;

  const isMobile = useMediaQuery("(max-width:600px)");
  const infoLink = isMobile ? MobileLink : Link;

  const bull = <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}></Box>;

  const card = (
    <Styles.CardWrapper>
      <CardContent style={{ minHeight: "250px" }}>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {getWeekday({ timestamp: Date })}
        </Typography>
        <Styles.TempWrapper>
          <Typography variant="h5" component="div">
            {Math.round(Temperature.Maximum.Value)}
            {`°${Temperature.Maximum.Unit}`} - {Math.round(Temperature.Minimum.Value)}
            {`°${Temperature.Minimum.Unit}`}
          </Typography>
        </Styles.TempWrapper>
        <Styles.IconWrapper>
          <Styles.Icon src={`src/icons/${Day.Icon}.png`} alt="Weather Icon" />
          <Typography variant="body2">{Day.IconPhrase.split(" ").slice(0, 2).join(" ")}</Typography>
          <Styles.Icon src={`src/icons/${Night.Icon}.png`} alt="Weather Icon" />
          <Typography variant="body2">{Night.IconPhrase}</Typography>
        </Styles.IconWrapper>
      </CardContent>
      <CardActions>
        <Styles.Link href={infoLink} target="_blank">
          <Button size="small">Get full info</Button>
        </Styles.Link>
      </CardActions>
    </Styles.CardWrapper>
  );

  return (
    <Box sx={{ minWidth: 200 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
