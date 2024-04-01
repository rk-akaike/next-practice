import { FC } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface ChartProps {
  options: Highcharts.Options;
}

const Chart: FC<ChartProps> = ({ options }) => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{ className: "h-full" }}
    />
  );
};

export default Chart;
