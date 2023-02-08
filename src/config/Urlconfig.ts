export const URLS = {
  HOME: '/',
  SEARCH_EVENT: '/search',
  SIGN_IN: '/sign-in',
  ORGANIZER: {
    ADD_ORGANIZER: '/organizer/add_organizer',
    ORGANIZATION_SETTING: '/organizer/organization_setting',
    ORGANIZER_PROFILE: '/organizer/organizer_profile'
  },
  SIGN_UP: {
    VERIFY_EMAIL: '/sign-up/verify-email',
    VERIFY_OTP: '/sign-up/verify-otp',
    CREATE_ACCOUNT: '/sign-up/create-account'
  },
  PROFILE: {
    ARTIST_LIST: '/profile/artist_list',
    ARTIST_DETAIL: '/profile/artist_list/id'
  },
  EVENT_DETAIL: '/event/view/id',
  PAGE: {
    NEWSLETTER: '/page/newsletter',
    ABOUT_US: '/page/about-us',
    SUPPORT: '/page/support'
  },
  CONTACT_US: '/home/contact_us',
  VENUE: {
    HOME: '/search/venue/id',
    DETAIL: '/search/venue/detail'
  },
  TICKET_PROTECT: '/ticketprotect',
  SALESMEN: {
    REGISTER: '/salesmen/register'
  },
  BLOG: '/blog',
  ACCOUNT: {
    CHANGE_PASSWORD: '/account/change_password',
    CONTACT_LIST: '/account/contact_list',
    DELETE_ACCOUNT: '/account/delete_account',
    EMAIL_PREFERENCE: '/account/email_preferences',
    ANALYTICS: '/account/google_facebook_analytics',
    MULTI_USER: '/account/multi_user',
    MY_PROFILE: '/account/myprofile',
    MY_ACTIVITY: '/account/my_activity',
    MY_EARNINGS: '/account/my_earnings',
    MY_FOLLOWING: '/account/my_following',
    MY_REFERRALS: '/account/my_referrals',
    MY_VENUES: '/account/my_venues'
  },
  EVENT: {
    BUY_TICKET: {
      BUY_TICKET: '/event/buy_ticket',
      MOBILE_VERIFICATION: '/event/buy_ticket/otp_verification',
      ENTER_NUMBER: '/event/buy_ticket/enter_number',
      ADD_ONS: '/event/buy_ticket/add_ons',
      ORDER_SUMMARY: '/event/buy_ticket/order_summary'
    },
    CHECKOUT: {
      CHECKOUT: '/event/buy_ticket/checkout',
      PAYMENT_CONFIRMATION: '/event/buy_ticket/checkout/payment_confirmation',
      ADD_ACCESS_CODE: '/event/buy_ticket/add_access_code'
    },
    CREATE_EVENT: '/event/create_event',
    EVENT_INFO: {
      BASIC_INFO: '/event/create_event/basic_info',
      LOCATION_INFO: '/event/create_event/location_info',
      DATE_AND_TIME: '/event/create_event/date_and_time',
      COVER_IMAGE: '/event/create_event/cover_image',
      TAGS_AND_DESCRIPTION: '/event/create_event/tags_and_description',
      TICKET_CREATION: '/event/create_event/ticket_creation',
      TICKET_VIEW: '/event/create_event/ticket_view',
      ADD_ACCESS_CODE: '/event/create_event/add_access_code',
      SETUP_REFUND_POLICY: '/event/create_event/setup_refund_policy',
      ADD_ONS: {
        ADD_ITEM: '/event/create_event/add_ons',
        ADD_ONS_LIST: '/event/create_event/add_ons/list',
        EDIT_ITEMS: '/event/create_event/add_ons/edit_items'
      }
    },
    EVENT_PREVIEW: '/event/preview'
  },
  COSTUMES: {
    HOME: '/costume/sell_costume',
    CREATE: '/costume/sell_costume/create_costume',
    CREATE_COSTUME: {
      ADDITIONAL_INFO: {
        HOME: '/costume/sell_costume/create_costume/additional_info',
        ADD_BRAND: '/costume/sell_costume/create_costume/additional_info/add_new_brand',
        ADD_PARADE: '/costume/sell_costume/create_costume/additional_info/add_new_parade',
        OTP_VERIFICATION: '/costume/sell_costume/create_costume/additional_info/otp_verification'
      },
      COSTUME_DETAILS: {
        HOME: '/costume/sell_costume/create_costume/costume_details',
        BASIC_INFO: '/costume/sell_costume/create_costume/costume_details/basic_info',
        ADD_FEES: '/costume/sell_costume/create_costume/costume_details/basic_info/add_fees',
        COSTUME_SIZING: '/costume/sell_costume/create_costume/costume_details/costume_sizing',
        UPLOAD_COSTUME: '/costume/sell_costume/create_costume/costume_details/upload_costume'
      },
      COSTUME_GALLERY: '/costume/sell_costume/create_costume/costume_gallery',
      PAYMENT_MODE: '/costume/sell_costume/create_costume/payment_mode',
      SETTINGS: '/costume/sell_costume/create_costume/settings'
    },
    EXPLORE_COSTUME: {
      HOME: '/costume/explore_costumes',
      COSTUME_DETAIL: '/costume/explore_costumes/',
      BUY_COSTUME: '/costume/explore_costumes/buy_costume',
      COSTUME_LIST: '/costume/explore_costumes/list'
    }
  }
}
