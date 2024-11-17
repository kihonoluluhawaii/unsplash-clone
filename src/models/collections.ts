export interface ICollection {
  id: string;
  title: string;
  description?: string;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  featured: boolean;
  total_photos: number;
  private: boolean;
  share_key: string;
  tags: Tag[];
  links: Links3;
  user: User2;
  cover_photo: CoverPhoto2;
  preview_photos: PreviewPhoto[];
}

export interface Tag {
  type: string;
  title: string;
  source?: Source;
}

export interface Source {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  redirect: any;
  meta_title: string;
  meta_description: string;
  cover_photo: CoverPhoto;
  affiliate_search_query: any;
}

export interface Ancestry {
  type: Type;
  category?: Category;
  subcategory?: Subcategory;
}

export interface Type {
  slug: string;
  pretty_slug: string;
  redirect: any;
}

export interface Category {
  slug: string;
  pretty_slug: string;
  redirect: any;
}

export interface Subcategory {
  slug: string;
  pretty_slug: string;
  redirect: any;
}

export interface CoverPhoto {
  id: string;
  slug: string;
  alternative_slugs: AlternativeSlugs;
  created_at: string;
  updated_at: string;
  promoted_at?: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description?: string;
  alt_description: string;
  breadcrumbs: any[];
  urls: Urls;
  links: Links;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: any;
  topic_submissions: TopicSubmissions;
  asset_type: string;
  premium: boolean;
  plus: boolean;
  user: User;
}

export interface AlternativeSlugs {
  en: string;
  es: string;
  ja: string;
  fr: string;
  it: string;
  ko: string;
  de: string;
  pt: string;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface TopicSubmissions {
  nature?: Nature;
  wallpapers?: Wallpapers;
  "color-of-water"?: ColorOfWater;
  "textures-patterns"?: TexturesPatterns;
  people?: People;
  health?: Health;
  "current-events"?: CurrentEvents;
  spirituality?: Spirituality;
  "architecture-interior"?: ArchitectureInterior;
  experimental?: Experimental;
}

export interface Nature {
  status: string;
  approved_on?: string;
}

export interface Wallpapers {
  status: string;
  approved_on?: string;
}

export interface ColorOfWater {
  status: string;
  approved_on: string;
}

export interface TexturesPatterns {
  status: string;
  approved_on: string;
}

export interface People {
  status: string;
  approved_on: string;
}

export interface Health {
  status: string;
  approved_on: string;
}

export interface CurrentEvents {
  status: string;
  approved_on: string;
}

export interface Spirituality {
  status: string;
  approved_on: string;
}

export interface ArchitectureInterior {
  status: string;
  approved_on: string;
}

export interface Experimental {
  status: string;
  approved_on: string;
}

export interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name?: string;
  twitter_username?: string;
  portfolio_url?: string;
  bio?: string;
  location?: string;
  links: Links2;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  total_illustrations: number;
  total_promoted_illustrations: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export interface Links2 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: string;
  portfolio_url?: string;
  twitter_username?: string;
  paypal_email: any;
}

export interface Links3 {
  self: string;
  html: string;
  photos: string;
  related: string;
}

export interface User2 {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name?: string;
  twitter_username?: string;
  portfolio_url?: string;
  bio?: string;
  location?: string;
  links: Links4;
  profile_image: ProfileImage2;
  instagram_username?: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  total_illustrations: number;
  total_promoted_illustrations: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social2;
}

export interface Links4 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage2 {
  small: string;
  medium: string;
  large: string;
}

export interface Social2 {
  instagram_username?: string;
  portfolio_url?: string;
  twitter_username?: string;
  paypal_email: any;
}

export interface CoverPhoto2 {
  id: string;
  slug: string;
  alternative_slugs: AlternativeSlugs2;
  created_at: string;
  updated_at: string;
  promoted_at?: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description?: string;
  alt_description: string;
  breadcrumbs: any[];
  urls: Urls2;
  links: Links5;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: any;
  topic_submissions: TopicSubmissions2;
  asset_type: string;
  premium: boolean;
  plus: boolean;
  user: User3;
}

export interface AlternativeSlugs2 {
  en: string;
  es: string;
  ja: string;
  fr: string;
  it: string;
  ko: string;
  de: string;
  pt: string;
}

export interface Urls2 {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface Links5 {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface TopicSubmissions2 {
  "street-photography"?: StreetPhotography;
  wallpapers?: Wallpapers2;
  "fashion-beauty"?: FashionBeauty;
  "current-events"?: CurrentEvents2;
  "color-of-water"?: ColorOfWater2;
  nature?: Nature2;
  spirituality?: Spirituality2;
  "textures-patterns"?: TexturesPatterns2;
}

export interface StreetPhotography {
  status: string;
  approved_on: string;
}

export interface Wallpapers2 {
  status: string;
  approved_on: string;
}

export interface FashionBeauty {
  status: string;
  approved_on: string;
}

export interface CurrentEvents2 {
  status: string;
  approved_on: string;
}

export interface ColorOfWater2 {
  status: string;
}

export interface Nature2 {
  status: string;
}

export interface Spirituality2 {
  status: string;
  approved_on: string;
}

export interface TexturesPatterns2 {
  status: string;
  approved_on: string;
}

export interface User3 {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name?: string;
  twitter_username?: string;
  portfolio_url?: string;
  bio?: string;
  location?: string;
  links: Links6;
  profile_image: ProfileImage3;
  instagram_username?: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  total_illustrations: number;
  total_promoted_illustrations: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social3;
}

export interface Links6 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage3 {
  small: string;
  medium: string;
  large: string;
}

export interface Social3 {
  instagram_username?: string;
  portfolio_url?: string;
  twitter_username?: string;
  paypal_email: any;
}

export interface PreviewPhoto {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  blur_hash: string;
  asset_type: string;
  urls: Urls3;
}

export interface Urls3 {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}
