"use client";

import { forwardRef, useState, useEffect } from "react";
import { Flex, Text, SegmentedControl, IconButton, Scroller, Column, Button } from ".";

import styles from "./StylePanel.module.scss";
import classNames from "classnames";
import { style, protectedStyle } from "@/app/resources";

interface StylePanelProps extends React.ComponentProps<typeof Flex> {
  style?: React.CSSProperties;
  className?: string;
}

const shapes = ["conservative", "playful", "rounded"];

const colorOptions = {
  brand: [
    "cyan",
    "blue",
    "indigo",
    "violet",
    "magenta",
    "pink",
    "red",
    "orange",
    "yellow",
    "moss",
    "green",
    "emerald",
    "aqua",
  ],
  accent: [
    "cyan",
    "blue",
    "indigo",
    "violet",
    "magenta",
    "pink",
    "red",
    "orange",
    "yellow",
    "moss",
    "green",
    "emerald",
    "aqua",
  ],
  neutral: ["sand", "gray", "slate"],
};

const StylePanel = forwardRef<HTMLDivElement, StylePanelProps>(({ ...rest }, ref) => {
  const [selectedShape, setSelectedShape] = useState(style.border);
  const [brandColor, setBrandColor] = useState(style.brand);
  const [accentColor, setAccentColor] = useState(style.accent);
  const [neutralColor, setNeutralColor] = useState(style.neutral);
  const [theme, setTheme] = useState(style.theme);
  const [solid, setSolid] = useState(style.solid);
  const [solidStyle, setSolidStyle] = useState(style.solidStyle);
  const [transition, setTransition] = useState(style.transition);
  const [scaling, setScaling] = useState(style.scaling);
  const [surface, setSurface] = useState(style.surface);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-border", selectedShape);
    root.setAttribute("data-brand", brandColor);
    root.setAttribute("data-accent", accentColor);
    root.setAttribute("data-neutral", neutralColor);
    root.setAttribute("data-solid", solid);
    root.setAttribute("data-solid-style", solidStyle);
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-transition", transition);
    root.setAttribute("data-scaling", scaling);
    root.setAttribute("data-surface", surface);
    root.setAttribute("data-transition", transition);
  }, [
    selectedShape,
    brandColor,
    accentColor,
    neutralColor,
    solid,
    solidStyle,
    theme,
    transition,
    surface,
    scaling,
  ]);

  return (
    <Column fillWidth gap="16" ref={ref} {...rest}>
      <Column fillWidth paddingTop="12" paddingLeft="16" gap="4">
        <Text variant="heading-strong-s">Page</Text>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Personnaliser les paramètres globaux de la conception
        </Text>
      </Column>

      <Column fillWidth border="neutral-alpha-medium" radius="l-4">
        <Flex
          borderBottom="neutral-alpha-medium"
          horizontal="space-between"
          vertical="center"
          fillWidth
          paddingX="24"
          paddingY="16"
          gap="24"
        >
          <Text variant="label-default-s">Theme</Text>
          <SegmentedControl
            maxWidth={22}
            buttons={[
              { size: "l", value: "light", prefixIcon: "light" },
              { size: "l", value: "dark", prefixIcon: "dark" },
            ]}
            onToggle={(value) => setTheme(value as "light" | "dark")}
            selected={theme}
          />
        </Flex>
        <Flex horizontal="space-between" vertical="center" fillWidth paddingX="24" paddingY="16">
          <Text variant="label-default-s">Forme des bordures</Text>
          <Flex gap="4">
            {shapes.map((radius, index) => (
              <Flex
                data-border={shapes[index]}
                key={radius}
                horizontal="center"
                vertical="center"
                className={classNames(
                  styles.select,
                  selectedShape === radius ? styles.selected : "",
                )}
                onClick={() => {
                  setSelectedShape(radius);
                }}
              >
                <IconButton variant="ghost" size="m">
                  <div className={classNames(styles.neutral, styles.swatch)}></div>
                </IconButton>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Column>

      <Column fillWidth paddingTop="12" paddingLeft="16" gap="4">
        <Text variant="heading-strong-s">Couleur</Text>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Personnaliser les couleurs
        </Text>
      </Column>
      <Column fillWidth border="neutral-alpha-medium" radius="l-4">
        <Flex
          borderBottom="neutral-alpha-medium"
          horizontal="space-between"
          vertical="center"
          fillWidth
          paddingX="24"
          paddingY="16"
          gap="24"
        >
          <Flex textVariant="label-default-s" minWidth={3}>
            Principal
          </Flex>
          <Scroller minWidth={0} fitWidth>
            {colorOptions.brand.map((color, index) => (
              <Flex
                marginRight="2"
                key={color}
                horizontal="center"
                vertical="center"
                className={classNames(styles.select, brandColor === color ? styles.selected : "")}
                onClick={() => {
                  setBrandColor(color);
                }}
              >
                <IconButton variant="ghost" size="m">
                  <div className={`${styles[color]} ${styles.swatch}`}></div>
                </IconButton>
              </Flex>
            ))}
          </Scroller>
        </Flex>

        <Flex
          horizontal="space-between"
          vertical="center"
          fillWidth
          paddingX="24"
          paddingY="16"
          gap="24"
        >
          <Flex textVariant="label-default-s" minWidth={3}>
            Secondaire
          </Flex>
          <Scroller minWidth={0} fitWidth>
            {colorOptions.accent.map((color, index) => (
              <Flex
                marginRight="2"
                key={color}
                horizontal="center"
                vertical="center"
                className={classNames(styles.select, accentColor === color ? styles.selected : "")}
                onClick={() => {
                  setAccentColor(color);
                }}
              >
                <IconButton variant="ghost" size="m">
                  <div className={`${styles[color]} ${styles.swatch}`}></div>
                </IconButton>
              </Flex>
            ))}
          </Scroller>
        </Flex>
        <Flex
          horizontal="space-between"
          vertical="center"
          fillWidth
          paddingX="24"
          paddingY="16"
          gap="24"
        >
          <Flex textVariant="label-default-s" minWidth={3}>
            Titre avec couleur inverser:
          </Flex>
          <Text wrap="pretty" align="center" onBackground="accent-strong" variant="heading-default-s">
            Fort
          </Text>
          <Text wrap="pretty" align="center" onBackground="accent-medium" variant="heading-default-s">
            Moyen
          </Text>
          <Text wrap="pretty" align="center" onBackground="accent-weak" variant="heading-default-s">
            Faible
          </Text>
        </Flex>
        <Flex
          horizontal="space-between"
          vertical="center"
          fillWidth
          paddingX="24"
          paddingY="16"
          gap="24"
        >
          <Flex textVariant="label-default-s" minWidth={3}>
            Neutre
          </Flex>
          <Scroller minWidth={0} fitWidth>
            {colorOptions.neutral.map((color, index) => (
              <Flex
                marginRight="2"
                key={color}
                horizontal="center"
                vertical="center"
                className={classNames(styles.select, neutralColor === color ? styles.selected : "")}
                onClick={() => {
                  setNeutralColor(color);
                }}
              >
                <IconButton variant="ghost" size="m">
                  <div className={`${styles[color]} ${styles.swatch}`}></div>
                </IconButton>
              </Flex>
            ))}
          </Scroller>
        </Flex>
        <Flex
          horizontal="space-between"
          vertical="center"
          fillWidth
          paddingX="24"
          paddingY="16"
          gap="24"
        >
          <Flex textVariant="label-default-s" minWidth={3}>
            Titre et fond de couleur neutre:
          </Flex>
          <Text wrap="pretty" align="center" onBackground="neutral-strong" variant="heading-default-s">
            Fort
          </Text>
          <Text wrap="pretty" align="center" onBackground="neutral-medium" variant="heading-default-s">
            Moyen
          </Text>
          <Text wrap="pretty" align="center" onBackground="neutral-weak" variant="heading-default-s">
            Faible
          </Text>
        </Flex>
      </Column>

      <Column fillWidth paddingTop="12" paddingLeft="16" gap="4">
        <Text variant="heading-strong-s">Style et matériaux</Text>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Personnaliser l'apparence des éléments interactifs
        </Text>
      </Column>
      <Column fillWidth center border="neutral-alpha-medium" paddingBottom="12" radius="l-4">
        <Flex
          borderBottom="neutral-alpha-medium"
          horizontal="space-between"
          vertical="center"
          fillWidth
          paddingX="24"
          paddingY="16"
          gap="24"
        >
          <Text variant="label-default-s">Style</Text>
          <SegmentedControl
            maxWidth={22}
            minWidth={0}
            buttons={[
              {
                size: "l",
                label: (
                  <Flex vertical="center" gap="12">
                    <Flex
                      data-solid="color"
                      border="brand-strong"
                      solid="brand-weak"
                      position="relative"
                      width="24"
                      height="24"
                      radius="s"
                    ></Flex>
                    Couleur
                  </Flex>
                ),
                value: "color",
              },
              {
                size: "l",
                label: (
                  <Flex vertical="center" gap="12">
                    <Flex
                      data-solid="inverse"
                      border="brand-strong"
                      solid="brand-strong"
                      position="relative"
                      width="24"
                      height="24"
                      radius="s"
                    ></Flex>
                    Inverse
                  </Flex>
                ),
                value: "inverse",
              },
              {
                size: "l",
                label: (
                  <Flex vertical="center" gap="12">
                    <Flex
                      data-solid="contrast"
                      border="brand-strong"
                      solid="brand-strong"
                      position="relative"
                      width="24"
                      height="24"
                      radius="s"
                    ></Flex>
                    Contrast
                  </Flex>
                ),
                value: "contrast",
              },
            ]}
            onToggle={(value) => setSolid(value as "color" | "contrast" | "inverse")}
            selected={solid}
          />
        </Flex>
        <Flex
          horizontal="space-between"
          vertical="center"
          fillWidth
          paddingX="24"
          paddingY="16"
          gap="24"
        >
          <Text variant="label-default-s">Effet</Text>

          <SegmentedControl
            maxWidth={22}
            minWidth={0}
            buttons={[
              {
                size: "l",
                label: (
                  <Flex vertical="center" gap="12">
                    <Flex
                      border="brand-strong"
                      solid="brand-weak"
                      position="relative"
                      width="24"
                      height="24"
                      radius="s"
                    ></Flex>
                    Flat
                  </Flex>
                ),
                value: "flat",
              },
              {
                size: "l",
                label: (
                  <Flex vertical="center" gap="12">
                    <Flex
                      border="brand-strong"
                      style={{
                        boxShadow:
                          "inset 0 calc(-1 * var(--static-space-8)) var(--static-space-8) var(--brand-solid-strong)",
                      }}
                      solid="brand-weak"
                      position="relative"
                      width="24"
                      height="24"
                      radius="s"
                    ></Flex>
                    Plastic
                  </Flex>
                ),
                value: "plastic",
              },
            ]}
            onToggle={(value) => setSolidStyle(value as "flat" | "plastic")}
            selected={solidStyle}
          />
        </Flex>
        <Button
          variant="primary"
          size="m"
          label="Je suis un Button"
        />
      </Column>
      <Column fillWidth paddingTop="12" paddingLeft="16" gap="4">
        <Text variant="heading-strong-s">Paramètre avancé</Text>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Personnaliser les options de style avancées
        </Text>
      </Column>
      <Column fillWidth border="neutral-alpha-medium" radius="l-4">

        {surface && !protectedStyle && <Flex
          borderBottom="neutral-alpha-medium"
          horizontal="space-between"
          vertical="center"
          fillWidth
          paddingX="24"
          paddingY="16"
          gap="24"
        ><Text variant="label-default-s">Surface</Text>
          <SegmentedControl
            maxWidth={22}
            minWidth={0}
            onToggle={(value) => setSurface(value as "translucent" | "filled")}
            selected={surface}
            buttons={[
              {
                size: "l",
                label: "Filled",
                value: "filled",
              },
              {
                size: "l",
                label: "Translucent",
                value: "translucent",
              },
            ]}
          />
        </Flex>}
        <Flex
          borderBottom="neutral-alpha-medium"
          horizontal="space-between"
          vertical="center"
          fillWidth
          paddingX="24"
          paddingY="16"
          gap="24"
        >
          <Text variant="label-default-s">Agrandissement</Text>
          <SegmentedControl
            maxWidth={22}
            minWidth={0}
            onToggle={(value) => setScaling(value as "90" | "95" | "100" | "105" | "110")}
            selected={scaling}
            buttons={[
              {
                size: "l",
                label: "90",
                value: "90",
              },
              {
                size: "l",
                label: "95",
                value: "95",
              },
              {
                size: "l",
                label: "100",
                value: "100",
              },
              {
                size: "l",
                label: "105",
                value: "105",
              },
              {
                size: "l",
                label: "110",
                value: "110",
              },
            ]}
          />
        </Flex>
        <Flex
          horizontal="space-between"
          vertical="center"
          fillWidth
          paddingX="24"
          paddingY="16"
          gap="24"
        >
          <Text variant="label-default-s">Transition</Text>
          <SegmentedControl
            maxWidth={22}
            minWidth={0}
            onToggle={(value) => setTransition(value as "all" | "micro" | "macro" | "none")}
            selected={transition}
            buttons={[
              {
                size: "l",
                label: "All",
                value: "all",
              },
              {
                size: "l",
                label: "Micro",
                value: "micro",
              },
              {
                size: "l",
                label: "Macro",
                value: "macro",
              },
              {
                size: "l",
                label: "None",
                value: "none",
              },
            ]}
          />
        </Flex>
      </Column>
    </Column>
  );
});

StylePanel.displayName = "StylePanel";
export { StylePanel };
