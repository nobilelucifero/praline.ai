import { Button } from "../Button";

export default function ModalToolbar(props) {
  return (
    <div className="mt-6">
      <Button>Post on Twitter</Button>
      <Button>Post on Linkedin</Button>
      <Button>Copy text</Button>
    </div>
  );
}
