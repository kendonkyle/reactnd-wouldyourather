
export const styles = theme => ({
  card: {
    display: "flex",
  },
  cardHeader: {
    "background-color": "#80808040",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing.unit * 2,
    "padding-left": theme.spacing.unit * 3
  },
  textlines: {
    padding: theme.spacing.unit * 2
  },
  avatar: {
    width: 80,
    height: 80,
    margin: theme.spacing.unit * 2,
    "margin-top": theme.spacing.unit * 4,
    "background-color": "#ddd"
  },
  scoreSection: {
    height: "80%",
    padding: "5%",
    marginTop: "5%"
  },
  score: {
    height: "100%",
  }
});