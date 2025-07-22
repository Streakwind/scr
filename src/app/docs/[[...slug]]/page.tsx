import { source } from '@/../lib/source';
// import { Rate } from '@/../components/rate';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/../mdx-components';
import { PageFooter } from '@/components/page-footer';
import { getFileLastModified } from '@/lib/git-utils';
import { PageMetadata } from '@/components/page-metadata';
import { parsePageMetadata } from '@/lib/frontmatter-utils';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  
  // Create file path from slug
  const filePath = params.slug ? params.slug.join('/') : '';
  
  // Get the actual last modified date from Git
  const lastModified = await getFileLastModified(filePath);
  
  // Parse metadata from the page content
  const metadata = parsePageMetadata(page.data.content);

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <PageMetadata 
        author={metadata.author}
      />
      <div className="-mt-2 -mb-10">
        <DocsDescription>{page.data.description}</DocsDescription>
      </div>
    
      <hr className="border-border mb-2" />
      
      <DocsBody>
        <MDX components={getMDXComponents()} />
        
        <PageFooter 
          filePath={filePath}
          lastModified={lastModified}
        />
      </DocsBody>
      {/* <Rate
        onRateAction={async (url, feedback) => {
          'use server';
          await posthog.capture('on_rate_docs', feedback);
        }}
      /> */}
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}