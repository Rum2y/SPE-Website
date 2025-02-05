import Card from "@mui/material/Card";
import "./card.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function Cards(props) {
  return (
    <>
      {props.arr.map((member, id) => {
        return (
          <Link to={member?.link} key={id + 1}>
            <Card sx={{ maxWidth: props.width }} className={props.className}>
              <CardActionArea>
                <div className="overflow-hidden">
                  <CardMedia
                    component="img"
                    sx={{ height: props.height }}
                    image={props.img || member.img}
                    alt="dummy img"
                    className="img"
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="text-[#0D4C94]"
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-black"
                    sx={{ fontWeight: 500, fontSize: "1.05rem" }}
                  >
                    {member.title || member.position}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        );
      })}
    </>
  );
}
