import SchoolIcon from "@mui/icons-material/School";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PeopleIcon from "@mui/icons-material/People";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ImageIcon from "@mui/icons-material/Image";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import CodeIcon from "@mui/icons-material/Code";

const GetIcon = ({ iconName }: { iconName: string }) => {
  switch (iconName) {
    case "SchoolIcon":
      return <SchoolIcon data-testid="SchoolIcon" />;
    case "ShowChartIcon":
      return <ShowChartIcon data-testid="ShowChartIcon" />;
    case "PeopleIcon":
      return <PeopleIcon data-testid="PeopleIcon" />;
    case "LibraryBooksIcon":
      return <LibraryBooksIcon data-testid="LibraryBooksIcon" />;
    case "MedicalServicesIcon":
      return <MedicalServicesIcon data-testid="MedicalServicesIcon" />;
    case "CameraRollIcon":
      return <CameraRollIcon data-testid="CameraRollIcon" />;
    case "CodeIcon":
      return <CodeIcon data-testid="CodeIcon" />;
    default:
      return <ImageIcon data-testid="ImageIcon" />;
  }
};

export default GetIcon;
