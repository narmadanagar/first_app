import styled from "styled-components";
import {
  Row,
  Col,
  Image,
  Button,
  ButtonToolbar,
  FormControl
} from "react-bootstrap";
import ImageGallery from "react-image-gallery";

/* const, let, var */

export const SlideShow = styled(ImageGallery)`
  width: 30px;
  height: 20px;
`;

export const InfoInput = styled(FormControl)`
  width: 100vh;
`;

export const buttonStyle = styled(Button)`
  padding: 10vh;
`;
