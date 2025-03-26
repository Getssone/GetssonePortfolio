import { Column, Flex, RevealFx, StyleOverlay, StylePanel, Text } from "@/once-ui/components";
import { themeParams } from "@/app/resources/content";

export default function ThemeParams() {
  return (

    <Column>
      <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="m">
        <Text wrap="pretty" onBackground="accent-strong" variant="heading-strong-xl">
          {themeParams.description}
        </Text>
      </RevealFx>
      <Flex fillWidth>
        <StylePanel />
      </Flex>
    </Column>
  );
}
