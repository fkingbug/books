export interface IndustryIdentifierBookItem {
  type: string
  identifier: string
}

export interface ReadingModesBookItem {
  text: boolean
  image: boolean
}

export interface PanelizationSummaryBookItem {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}

export interface ImageLinksBookItem {
  smallThumbnail: string
  thumbnail: string
  small: string
  medium: string
  large: string
  extraLarge: string
}

export interface VolumeInfoBookItem {
  title: string
  authors: string[]
  publisher: string
  publishedDate: string
  description: string
  industryIdentifiers: IndustryIdentifierBookItem[]
  readingModes: ReadingModesBookItem
  pageCount: number
  printedPageCount: number
  printType: string
  categories: string[]
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary: PanelizationSummaryBookItem
  imageLinks: ImageLinksBookItem
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}

export interface LayerBookItem {
  layerId: string
  volumeAnnotationsVersion: string
}

export interface LayerInfoBookItem {
  layers: LayerBookItem[]
}

export interface ListPriceBookItem {
  amount: number
  currencyCode: string
}

export interface RetailPriceBookItem {
  amount: number
  currencyCode: string
}

export interface ListPrice2BookItem {
  amountInMicros: number
  currencyCode: string
}

export interface RetailPrice2BookItem {
  amountInMicros: number
  currencyCode: string
}

export interface OfferBookItem {
  finskyOfferType: number
  listPrice: ListPrice2BookItem
  retailPrice: RetailPrice2BookItem
}

export interface SaleInfoBookItem {
  country: string
  saleability: string
  isEbook: boolean
  listPrice: ListPriceBookItem
  retailPrice: RetailPriceBookItem
  buyLink: string
  offers: OfferBookItem[]
}

export interface EpubBookItem {
  isAvailable: boolean
}

export interface PdfBookItem {
  isAvailable: boolean
}

export interface AccessInfoBookItem {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: EpubBookItem
  pdf: PdfBookItem
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

export interface RootObjectBookItem {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfoBookItem
  layerInfo: LayerInfoBookItem
  saleInfo: SaleInfoBookItem
  accessInfo: AccessInfoBookItem
}
