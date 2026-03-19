import { Metadata } from 'next';

import ClientSlugHandler from './ClientSlugHandler';
import PageContent from '@/lib/shared/PageContent';
import { generateMetadataObject } from '@/lib/shared/metadata';
import { fetchCollectionType } from '@/lib/strapi';
import type { LocaleParamsProps } from '@/types/types';
import { SoftwareAsAServiceSection } from '@/components/custom/PoweredByAISection';
import { NewsAndMediaSection } from '@/components/custom/NewsAndMediaSection';
import { EnterpriseSolutionsSection } from '@/components/custom/EnterpriseSolutionsSection';

export async function generateMetadata({
  params,
}: LocaleParamsProps): Promise<Metadata> {
  const { locale } = await params;

  const [pageData] = await fetchCollectionType('pages', {
    filters: {
      slug: {
        $eq: 'homepage',
      },
      locale: locale,
    },
  });

  const seo = pageData.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

export default async function HomePage({ params }: LocaleParamsProps) {
  const { locale } = await params;

  // Keep original Strapi data for dynamic zones
  const [pageData] = await fetchCollectionType('pages', {
    filters: {
      slug: {
        $eq: 'homepage',
      },
      locale: locale,
    },
  });

  const localizedSlugs = pageData.localizations?.reduce(
    (acc: Record<string, string>, localization: any) => {
      acc[localization.locale] = '';
      return acc;
    },
    { [locale]: '' }
  );

  return (
    <>
      <ClientSlugHandler localizedSlugs={localizedSlugs} />
      <div className="min-h-screen">
        {/* Original Dynamic Zones from Strapi */}
        <PageContent pageData={pageData} />
        
        {/* Additional Custom Sections */}
        <EnterpriseSolutionsSection locale={locale} videoSource="https://cdn.pixabay.com/video/2022/12/20/143641-784129630_large.mp4" />
        <SoftwareAsAServiceSection locale={locale} />
        <NewsAndMediaSection locale={locale} />
      </div>
    </>
  );
}
