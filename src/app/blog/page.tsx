import { Avatar, Card, Column, Flex, Heading, Icon, Line, RevealFx, Row, Text } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL } from "@/app/resources";
import { blog, person, newsletter } from "@/app/resources/content";

export async function generateMetadata() {
  const title = blog.title;
  const description = blog.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/blog`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog() {
  let randomIndex = 0;
  if (blog.quotes && blog.quotes.length > 0) {
    randomIndex = Math.floor(Math.random() * blog.quotes.length);
  }
  return (
    <Column maxWidth="s">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: blog.title,
            description: blog.description,
            url: `https://${baseURL}/blog`,
            image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {blog.subtitle}
      </Heading>
      {blog.quotes && blog.quotes.length > 0 && (
        <RevealFx translateY="8" delay={0.2} horizontal="start" paddingBottom="m">
          <Card
            maxWidth={100}
            radius="l-4"
            direction="column"
          >
            <Column
              padding="xl"
              paddingY="24"
              gap="8"
            >
              <Flex>
                <Icon className="quote mr-8" size="xl" name="quote" />
                <Text
                  onBackground="neutral-weak"
                  variant="body-default-s"
                >
                  {blog.quotes[randomIndex].text}
                </Text>
              </Flex>
            </Column>
            <Line background="neutral-alpha-weak" />
            <Row
              paddingX="20"
              paddingY="12"
              gap="8"
              vertical="center"
              textVariant="label-default-s"
              onBackground="neutral-medium"
            >
              <Avatar
                size="l"
                src={blog.quotes[randomIndex].authorPicture}
              />
              {blog.quotes[randomIndex].author}
            </Row>
          </Card>
        </RevealFx>
        // <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
        //   {blog.description}
        // </Column>
      )}
      <Column fillWidth flex={1}>
        <Posts range={[1, 3]} thumbnail />
        {/* <Posts range={[1, 3]} columns="2"/> */}
      </Column>
      {/* {newsletter.display && <Mailchimp newsletter={newsletter} />} */}
    </Column>
  );
}
