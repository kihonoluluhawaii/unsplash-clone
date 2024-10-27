import { IPhoto } from "@/models/photos.ts";

export interface ITopic {
  id: string;
  slug: string;
  title: string;
  description: string;
  published_at: string;
  updated_at: string;
  starts_at: string;
  ends_at: any;
  only_submissions_after: string;
  visibility: string;
  featured: boolean;
  total_photos: number;
  current_user_contributions: any[];
  total_current_user_submissions: any;
  links: Links;
  media_types: string[];
  status: string;
  owners: Owner[];
  cover_photo: IPhoto;
  preview_photos: PreviewPhoto[];
  top_contributors: {
    name: string;
    username: string;
    profile_image: {
      medium: string;
    };
  }[];
}

export interface Links {
  self: string;
  html: string;
  photos: string;
}

export interface Owner {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: any;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
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
  portfolio_url: string;
  twitter_username: string;
  paypal_email: any;
}

export interface ITopicPhoto {
  id: string;
  slug: string;
  alternative_slugs: AlternativeSlugs;
  created_at: string;
  updated_at: string;
  promoted_at: any;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description?: string;
  alt_description: string;
  breadcrumbs: any[];
  urls: Urls;
  links: Links3;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: any;
  topic_submissions: TopicSubmissions;
  asset_type: string;
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

export interface Links3 {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface TopicSubmissions {
  "3d-renders"?: N3dRenders;
  wallpapers?: Wallpapers;
  animals?: Animals;
  "architecture-interior"?: ArchitectureInterior;
  experimental?: Experimental;
  "fashion-beauty"?: FashionBeauty;
  film?: Film;
  "food-drink"?: FoodDrink;
  nature?: Nature;
  people?: People;
  sports?: Sports;
  travel?: Travel;
  "rising-stars"?: RisingStars;
}

export interface N3dRenders {
  status: string;
  approved_on?: string;
}

export interface Wallpapers {
  status: string;
  approved_on: string;
}

export interface Animals {
  status: string;
  approved_on: string;
}

export interface ArchitectureInterior {
  status: string;
  approved_on: string;
}

export interface Experimental {
  status: string;
  approved_on?: string;
}

export interface FashionBeauty {
  status: string;
  approved_on: string;
}

export interface Film {
  status: string;
  approved_on: string;
}

export interface FoodDrink {
  status: string;
  approved_on: string;
}

export interface Nature {
  status: string;
  approved_on?: string;
}

export interface People {
  status: string;
  approved_on: string;
}

export interface Sports {
  status: string;
  approved_on: string;
}

export interface Travel {
  status: string;
  approved_on: string;
}

export interface RisingStars {
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
  links: Links4;
  profile_image: ProfileImage2;
  instagram_username: string;
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
  instagram_username: string;
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
  urls: Urls2;
}

export interface Urls2 {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}
