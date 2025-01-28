export const indianStates = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
  ];
  
  export const soilTypes = [
    'Sandy',
    'Silt',
    'Clay',
    'Loamy',
    'Red',
    'Black'
  ];
  
  export const cropRecommendations: Record<string, Array<{
    season: string;
    primaryCrop: string;
    rotationCrop: string;
    reason: string;
  }>> = {
    'Sandy': [
      {
        season: 'Kharif (Monsoon)',
        primaryCrop: 'Groundnut',
        rotationCrop: 'Green Gram',
        reason: "Sandy soil is well-suited for groundnuts. Rotating with green gram helps fix nitrogen in the soil and improves soil structure."
      },
      {
        season: 'Rabi (Winter)',
        primaryCrop: 'Potato',
        rotationCrop: 'Mustard',
        reason: "Potatoes grow well in sandy soil. Mustard as a rotation crop helps in pest management and adds organic matter to the soil."
      }
    ],
    'Silt': [
      {
        season: 'Kharif (Monsoon)',
        primaryCrop: 'Rice',
        rotationCrop: 'Lentils',
        reason: "Silt soil retains moisture well for rice cultivation. Lentils improve soil fertility through nitrogen fixation."
      },
      {
        season: 'Rabi (Winter)',
        primaryCrop: 'Wheat',
        rotationCrop: 'Chickpea',
        reason: "Wheat thrives in silt soil. Chickpea rotation enhances soil nitrogen content and breaks pest cycles."
      }
    ],
    'Clay': [
      {
        season: 'Kharif (Monsoon)',
        primaryCrop: 'Cotton',
        rotationCrop: 'Soybean',
        reason: "Clay soil retains water well which suits cotton. Soybean rotation improves soil structure and adds nitrogen."
      },
      {
        season: 'Rabi (Winter)',
        primaryCrop: 'Gram',
        rotationCrop: 'Safflower',
        reason: "Gram grows well in clay soil. Safflower helps break up clay soil with its deep roots."
      }
    ],
    'Loamy': [
      {
        season: 'Kharif (Monsoon)',
        primaryCrop: 'Maize',
        rotationCrop: 'Pigeon Pea',
        reason: "Loamy soil provides ideal conditions for maize. Pigeon pea improves soil fertility and provides good soil cover."
      },
      {
        season: 'Rabi (Winter)',
        primaryCrop: 'Vegetables',
        rotationCrop: 'Clover',
        reason: "Vegetables thrive in nutrient-rich loamy soil. Clover adds nitrogen and improves soil structure."
      }
    ],
    'Red': [
      {
        season: 'Kharif (Monsoon)',
        primaryCrop: 'Finger Millet',
        rotationCrop: 'Black Gram',
        reason: "Red soil suits drought-resistant crops like finger millet. Black gram improves soil fertility."
      },
      {
        season: 'Rabi (Winter)',
        primaryCrop: 'Sorghum',
        rotationCrop: 'Field Pea',
        reason: "Sorghum is well-adapted to red soil. Field pea rotation enhances soil nitrogen and organic matter."
      }
    ],
    'Black': [
      {
        season: 'Kharif (Monsoon)',
        primaryCrop: 'Cotton',
        rotationCrop: 'Soybean',
        reason: "Black soil is excellent for cotton. Soybean rotation improves soil structure and nitrogen content."
      },
      {
        season: 'Rabi (Winter)',
        primaryCrop: 'Chickpea',
        rotationCrop: 'Sunflower',
        reason: "Chickpea thrives in black soil. Sunflower helps in utilizing residual moisture and nutrients."
      }
    ]
  };
  
  export const governmentSchemes = [
    {
      name: 'PM-KISAN',
      description: "Provides income support of ₹6,000 per year to all farmer families across the country in three equal installments.",
      link: 'https://pmkisan.gov.in/'
    },
    {
      name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
      description: 'Provides comprehensive crop insurance to farmers against any losses in crop yield.',
      link: 'https://pmfby.gov.in/'
    },
    {
      name: 'Kisan Credit Card (KCC)',
      description: 'Provides farmers with timely access to credit for their agricultural needs.',
      link: 'https://www.nabard.org/content1.aspx?id=502&catid=23&mid=530'
    },
    {
      name: 'Soil Health Card Scheme',
      description: 'Provides information to farmers on nutrient status of their soil along with recommendations on appropriate dosage of nutrients.',
      link: 'https://www.soilhealth.dac.gov.in/'
    },
    {
      name: 'PM Krishi Sinchai Yojana',
      description: "Ensures access to protective irrigation to all agricultural farms to produce \"per drop more crop\".",
      link: 'https://pmksy.gov.in/'
    }
  ];