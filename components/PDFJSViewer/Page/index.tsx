import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { PDFPageProxy } from 'pdfjs-dist/types/display/api';
import { useDocument } from '../Document/DocumentContext';
import { PageContextProvider } from './PageContext';
import PageCanvas from './PageCanvas';
import { useViewportDimensions } from './hooks';
import useForwardedRef from '../useForwardedRef';

export type PageProps = {
  children?: React.ReactNode;
  className?: string;
  onPageDraw?: () => void;
  onPageLoad?: (page: PDFPageProxy) => void;
  pageNumber: number;
  scale?: number;
};

const Page = React.forwardRef(
  (
    {
      children,
      className,
      onPageDraw,
      onPageLoad,
      pageNumber,
      scale = 1,
    }: PageProps,
    ref
  ) => {
    const pageDivRef = useForwardedRef(ref);
    const { pdf } = useDocument();
    const [page, setPage] = useState<PDFPageProxy | null>(null);
    const { style } = useViewportDimensions(page, scale);

    const pageContextValue = useMemo(
      () => ({
        page,
        pageNumber,
        scale,
      }),
      [page, pageNumber, scale]
    );

    const loadPage = useCallback(async () => {
      if (pdf && !page) {
        const pdfPage = await pdf.getPage(pageNumber);
        setPage(pdfPage);

        if (onPageLoad) {
          onPageLoad(pdfPage);
        }
      }
    }, [page, pdf, pageNumber, setPage, onPageLoad]);

    useEffect(() => {
      void loadPage();
    }, [page, pdf, loadPage]);

    return (
      <div
        ref={pageDivRef}
        className={className}
        data-testid={`page_${pageNumber}`}
        id={`page_${pageNumber}`}
      >
        <div className="page" data-page-number={pageNumber} style={style}>
          <PageContextProvider value={pageContextValue}>
            <PageCanvas onPageDraw={onPageDraw}>{children}</PageCanvas>
          </PageContextProvider>
        </div>
      </div>
    );
  }
);

Page.displayName = 'Page';

export default Page;
