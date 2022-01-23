import SchoolIcon from "@mui/icons-material/School";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PeopleIcon from "@mui/icons-material/People";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ImageIcon from "@mui/icons-material/Image";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import CodeIcon from "@mui/icons-material/Code";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

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
    case "LocationOnIcon":
      return <LocationOnIcon data-testid="LocationOnIcon" />;
    case "EmailIcon":
      return <EmailIcon data-testid="EmailIcon" />;
    case "LanguageIcon":
      return <LanguageIcon data-testid="LanguageIcon" />;
    case "LinkedInIcon":
      return <LinkedInIcon data-testid="LinkedInIcon" />;
    case "GitHubIcon":
      return <GitHubIcon data-testid="GitHubIcon" />;
    default:
      return <ImageIcon data-testid="ImageIcon" />;
  }
};

export default GetIcon;
