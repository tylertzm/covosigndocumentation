import React from 'react';
import clsx from 'clsx';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import ContentVisibility from '@theme/ContentVisibility';
import DocItemTOCDropdown from './tocDropdown';
import styles from './styles.module.css';

function useDocTOCDropdown() {
  const {frontMatter, toc} = useDoc();
  const hidden = frontMatter.hide_table_of_contents;
  const hasToc = !hidden && toc.length > 0;

  return {
    hidden,
    dropdown: hasToc ? <DocItemTOCDropdown /> : undefined,
  };
}

export default function DocItemLayout({children}) {
  const docToc = useDocTOCDropdown();
  const {metadata} = useDoc();

  return (
    <div className={clsx('row', styles.docItemRow)}>
      <div
        className={clsx(
          'col',
          styles.docItemCol,
          !docToc.hidden && styles.docItemColWithToc,
        )}>
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docToc.dropdown}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
    </div>
  );
}
