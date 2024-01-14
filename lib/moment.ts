import moment from "moment";

require("moment/locale/id");
const formatDate = (date: string) => {
  const currentDate = moment(date);
  const format = currentDate.locale("id").format("dddd, D MMMM YYYY");
  return format;
};
export { formatDate };
