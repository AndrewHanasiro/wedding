import Gift from "./_pages/gift/page";
import Home from "./_pages/home/page";
import Information from "./_pages/information/page";
import RSVP from "./_pages/rsvp/page";
import Text from "./_pages/text/page";

export default function Root() {
  const search = "Espaço+Jabutica";

  return (
    <>
      <Home />
      <Text />
      <Information />
      <RSVP />
      <Gift />
    </>
  );
}
