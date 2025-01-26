export type TFont = {
  family: string;
  variants: string[];
  subsets: string[];
  version: string;
  lastModified: string;
  files: Record<string, string | undefined>;
  category: string;
  kind: string;
  menu: string;
};

const GOOGLE_FONTS_LIST = () => ([
  {
    "family": "Roboto",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "math",
      "symbols",
      "vietnamese"
    ],
    "version": "v47",
    "lastModified": "2025-01-08",
    "files": {
      "100": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbGmTggvWl0Qn.ttf",
      "200": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZEbWmTggvWl0Qn.ttf",
      "300": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuaabWmTggvWl0Qn.ttf",
      "regular": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmTggvWl0Qn.ttf",
      "500": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bWmTggvWl0Qn.ttf",
      "600": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYaammTggvWl0Qn.ttf",
      "700": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjammTggvWl0Qn.ttf",
      "800": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZEammTggvWl0Qn.ttf",
      "900": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZtammTggvWl0Qn.ttf",
      "100italic": "https://fonts.gstatic.com/s/roboto/v47/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLoHRiA_0klQnx24.ttf",
      "200italic": "https://fonts.gstatic.com/s/roboto/v47/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLgHQiA_0klQnx24.ttf",
      "300italic": "https://fonts.gstatic.com/s/roboto/v47/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLt_QiA_0klQnx24.ttf",
      "italic": "https://fonts.gstatic.com/s/roboto/v47/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLoHQiA_0klQnx24.ttf",
      "500italic": "https://fonts.gstatic.com/s/roboto/v47/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLrPQiA_0klQnx24.ttf",
      "600italic": "https://fonts.gstatic.com/s/roboto/v47/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLl_XiA_0klQnx24.ttf",
      "700italic": "https://fonts.gstatic.com/s/roboto/v47/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLmbXiA_0klQnx24.ttf",
      "800italic": "https://fonts.gstatic.com/s/roboto/v47/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLgHXiA_0klQnx24.ttf",
      "900italic": "https://fonts.gstatic.com/s/roboto/v47/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLijXiA_0klQnx24.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmSiA8.ttf"
  },
  {
    "family": "Open Sans",
    "variants": [
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "hebrew",
      "latin",
      "latin-ext",
      "math",
      "symbols",
      "vietnamese"
    ],
    "version": "v40",
    "lastModified": "2024-09-04",
    "files": {
      "300": "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsiH0C4nY1M2xLER.ttf",
      "regular": "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf",
      "500": "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjr0C4nY1M2xLER.ttf",
      "600": "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1y4nY1M2xLER.ttf",
      "700": "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1y4nY1M2xLER.ttf",
      "800": "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgshZ1y4nY1M2xLER.ttf",
      "300italic": "https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk5hkaVcUwaERZjA.ttf",
      "italic": "https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkaVcUwaERZjA.ttf",
      "500italic": "https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk_RkaVcUwaERZjA.ttf",
      "600italic": "https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkxhjaVcUwaERZjA.ttf",
      "700italic": "https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkyFjaVcUwaERZjA.ttf",
      "800italic": "https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk0ZjaVcUwaERZjA.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4maVc.ttf"
  },
  {
    "family": "Noto Sans JP",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900"
    ],
    "subsets": [
      "cyrillic",
      "japanese",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v53",
    "lastModified": "2024-08-07",
    "files": {
      "100": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFBEi75vY0rw-oME.ttf",
      "200": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFJEj75vY0rw-oME.ttf",
      "300": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFE8j75vY0rw-oME.ttf",
      "regular": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFBEj75vY0rw-oME.ttf",
      "500": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFCMj75vY0rw-oME.ttf",
      "600": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFM8k75vY0rw-oME.ttf",
      "700": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFPYk75vY0rw-oME.ttf",
      "800": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFJEk75vY0rw-oME.ttf",
      "900": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFLgk75vY0rw-oME.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFBEj35rS1g.ttf"
  },
  {
    "family": "Montserrat",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v29",
    "lastModified": "2024-11-07",
    "files": {
      "100": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Uw-Y3tcoqK5.ttf",
      "200": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvr6Ew-Y3tcoqK5.ttf",
      "300": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Ew-Y3tcoqK5.ttf",
      "regular": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-Y3tcoqK5.ttf",
      "500": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Ew-Y3tcoqK5.ttf",
      "600": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu170w-Y3tcoqK5.ttf",
      "700": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM70w-Y3tcoqK5.ttf",
      "800": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvr70w-Y3tcoqK5.ttf",
      "900": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvC70w-Y3tcoqK5.ttf",
      "100italic": "https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq6R8aX9-p7K5ILg.ttf",
      "200italic": "https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jqyR9aX9-p7K5ILg.ttf",
      "300italic": "https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq_p9aX9-p7K5ILg.ttf",
      "italic": "https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq6R9aX9-p7K5ILg.ttf",
      "500italic": "https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq5Z9aX9-p7K5ILg.ttf",
      "600italic": "https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq3p6aX9-p7K5ILg.ttf",
      "700italic": "https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6aX9-p7K5ILg.ttf",
      "800italic": "https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jqyR6aX9-p7K5ILg.ttf",
      "900italic": "https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jqw16aX9-p7K5ILg.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw_aX8.ttf"
  },
  {
    "family": "Poppins",
    "variants": [
      "100",
      "100italic",
      "200",
      "200italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "600",
      "600italic",
      "700",
      "700italic",
      "800",
      "800italic",
      "900",
      "900italic"
    ],
    "subsets": [
      "latin",
      "latin-ext"
    ],
    "version": "v22",
    "lastModified": "2024-12-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/poppins/v22/pxiGyp8kv8JHgFVrLPTed3FBGPaTSQ.ttf",
      "100italic": "https://fonts.gstatic.com/s/poppins/v22/pxiAyp8kv8JHgFVrJJLmE3tFOvODSVFF.ttf",
      "200": "https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLFj_V1tvFP-KUEg.ttf",
      "200italic": "https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmv1plEN2PQEhcqw.ttf",
      "300": "https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLDz8V1tvFP-KUEg.ttf",
      "300italic": "https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLm21llEN2PQEhcqw.ttf",
      "regular": "https://fonts.gstatic.com/s/poppins/v22/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf",
      "italic": "https://fonts.gstatic.com/s/poppins/v22/pxiGyp8kv8JHgFVrJJLed3FBGPaTSQ.ttf",
      "500": "https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLGT9V1tvFP-KUEg.ttf",
      "500italic": "https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmg1hlEN2PQEhcqw.ttf",
      "600": "https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf",
      "600italic": "https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmr19lEN2PQEhcqw.ttf",
      "700": "https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf",
      "700italic": "https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmy15lEN2PQEhcqw.ttf",
      "800": "https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLDD4V1tvFP-KUEg.ttf",
      "800italic": "https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLm111lEN2PQEhcqw.ttf",
      "900": "https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLBT5V1tvFP-KUEg.ttf",
      "900italic": "https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLm81xlEN2PQEhcqw.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/poppins/v22/pxiEyp8kv8JHgFVrJJHedw.ttf"
  },
  {
    "family": "Inter",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v18",
    "lastModified": "2024-09-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyeMZhrib2Bg-4.ttf",
      "200": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuDyfMZhrib2Bg-4.ttf",
      "300": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuOKfMZhrib2Bg-4.ttf",
      "regular": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf",
      "500": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf",
      "600": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf",
      "700": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf",
      "800": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuDyYMZhrib2Bg-4.ttf",
      "900": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuBWYMZhrib2Bg-4.ttf",
      "100italic": "https://fonts.gstatic.com/s/inter/v18/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTc2dphjZ-Ek-7MeA.ttf",
      "200italic": "https://fonts.gstatic.com/s/inter/v18/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTcWdthjZ-Ek-7MeA.ttf",
      "300italic": "https://fonts.gstatic.com/s/inter/v18/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTch9thjZ-Ek-7MeA.ttf",
      "italic": "https://fonts.gstatic.com/s/inter/v18/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTc2dthjZ-Ek-7MeA.ttf",
      "500italic": "https://fonts.gstatic.com/s/inter/v18/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTc69thjZ-Ek-7MeA.ttf",
      "600italic": "https://fonts.gstatic.com/s/inter/v18/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTcB9xhjZ-Ek-7MeA.ttf",
      "700italic": "https://fonts.gstatic.com/s/inter/v18/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTcPtxhjZ-Ek-7MeA.ttf",
      "800italic": "https://fonts.gstatic.com/s/inter/v18/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTcWdxhjZ-Ek-7MeA.ttf",
      "900italic": "https://fonts.gstatic.com/s/inter/v18/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTccNxhjZ-Ek-7MeA.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZlhjQ.ttf"
  },
  {
    "family": "Lato",
    "variants": [
      "100",
      "100italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "700",
      "700italic",
      "900",
      "900italic"
    ],
    "subsets": [
      "latin",
      "latin-ext"
    ],
    "version": "v24",
    "lastModified": "2024-09-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/lato/v24/S6u8w4BMUTPHh30wWyWrFCbw7A.ttf",
      "100italic": "https://fonts.gstatic.com/s/lato/v24/S6u-w4BMUTPHjxsIPy-vNiPg7MU0.ttf",
      "300": "https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh7USew-FGC_p9dw.ttf",
      "300italic": "https://fonts.gstatic.com/s/lato/v24/S6u_w4BMUTPHjxsI9w2PHA3s5dwt7w.ttf",
      "regular": "https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHvxk6XweuBCY.ttf",
      "italic": "https://fonts.gstatic.com/s/lato/v24/S6u8w4BMUTPHjxswWyWrFCbw7A.ttf",
      "700": "https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVew-FGC_p9dw.ttf",
      "700italic": "https://fonts.gstatic.com/s/lato/v24/S6u_w4BMUTPHjxsI5wqPHA3s5dwt7w.ttf",
      "900": "https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh50Xew-FGC_p9dw.ttf",
      "900italic": "https://fonts.gstatic.com/s/lato/v24/S6u_w4BMUTPHjxsI3wiPHA3s5dwt7w.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjxgwWw.ttf"
  },
  {
    "family": "Roboto Condensed",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v27",
    "lastModified": "2024-09-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyWyo_BJ731BKMSK.ttf",
      "200": "https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyUyovBJ731BKMSK.ttf",
      "300": "https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyXsovBJ731BKMSK.ttf",
      "regular": "https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyWyovBJ731BKMSK.ttf",
      "500": "https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyWAovBJ731BKMSK.ttf",
      "600": "https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyVspfBJ731BKMSK.ttf",
      "700": "https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyVVpfBJ731BKMSK.ttf",
      "800": "https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyUypfBJ731BKMSK.ttf",
      "900": "https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyUbpfBJ731BKMSK.ttf",
      "100italic": "https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64RgL5XljLdSK37o.ttf",
      "200italic": "https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64ZgK5XljLdSK37o.ttf",
      "300italic": "https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64UYK5XljLdSK37o.ttf",
      "italic": "https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64RgK5XljLdSK37o.ttf",
      "500italic": "https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64SoK5XljLdSK37o.ttf",
      "600italic": "https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64cYN5XljLdSK37o.ttf",
      "700italic": "https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64f8N5XljLdSK37o.ttf",
      "800italic": "https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64ZgN5XljLdSK37o.ttf",
      "900italic": "https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64bEN5XljLdSK37o.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyWyosBI5Xk.ttf"
  },
  {
    "family": "Material Icons",
    "variants": [
      "regular"
    ],
    "subsets": [
      "latin"
    ],
    "version": "v143",
    "lastModified": "2025-01-08",
    "files": {
      "regular": "https://fonts.gstatic.com/s/materialicons/v143/flUhRq6tzZclQEJ-Vdg-IuiaDsNZIhI8tIHh.ttf"
    },
    "category": "monospace",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/materialicons/v143/flUhRq6tzZclQEJ-Vdg-IuiaDvNYKBY.ttf"
  },
  {
    "family": "Oswald",
    "variants": [
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v53",
    "lastModified": "2024-09-04",
    "files": {
      "200": "https://fonts.gstatic.com/s/oswald/v53/TK3_WkUHHAIjg75cFRf3bXL8LICs13FvgUFoZAaRliE.ttf",
      "300": "https://fonts.gstatic.com/s/oswald/v53/TK3_WkUHHAIjg75cFRf3bXL8LICs169vgUFoZAaRliE.ttf",
      "regular": "https://fonts.gstatic.com/s/oswald/v53/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvgUFoZAaRliE.ttf",
      "500": "https://fonts.gstatic.com/s/oswald/v53/TK3_WkUHHAIjg75cFRf3bXL8LICs18NvgUFoZAaRliE.ttf",
      "600": "https://fonts.gstatic.com/s/oswald/v53/TK3_WkUHHAIjg75cFRf3bXL8LICs1y9ogUFoZAaRliE.ttf",
      "700": "https://fonts.gstatic.com/s/oswald/v53/TK3_WkUHHAIjg75cFRf3bXL8LICs1xZogUFoZAaRliE.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/oswald/v53/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUBiYA.ttf"
  },
  {
    "family": "Roboto Mono",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v23",
    "lastModified": "2024-09-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/robotomono/v23/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vuPQ--5Ip2sSQ.ttf",
      "200": "https://fonts.gstatic.com/s/robotomono/v23/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_XvqPQ--5Ip2sSQ.ttf",
      "300": "https://fonts.gstatic.com/s/robotomono/v23/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_gPqPQ--5Ip2sSQ.ttf",
      "regular": "https://fonts.gstatic.com/s/robotomono/v23/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vqPQ--5Ip2sSQ.ttf",
      "500": "https://fonts.gstatic.com/s/robotomono/v23/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_7PqPQ--5Ip2sSQ.ttf",
      "600": "https://fonts.gstatic.com/s/robotomono/v23/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_AP2PQ--5Ip2sSQ.ttf",
      "700": "https://fonts.gstatic.com/s/robotomono/v23/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_Of2PQ--5Ip2sSQ.ttf",
      "100italic": "https://fonts.gstatic.com/s/robotomono/v23/L0xoDF4xlVMF-BfR8bXMIjhOsXG-q2oeuFoqFrlnAeW9AJi8SZwt.ttf",
      "200italic": "https://fonts.gstatic.com/s/robotomono/v23/L0xoDF4xlVMF-BfR8bXMIjhOsXG-q2oeuFoqFrnnAOW9AJi8SZwt.ttf",
      "300italic": "https://fonts.gstatic.com/s/robotomono/v23/L0xoDF4xlVMF-BfR8bXMIjhOsXG-q2oeuFoqFrk5AOW9AJi8SZwt.ttf",
      "italic": "https://fonts.gstatic.com/s/robotomono/v23/L0xoDF4xlVMF-BfR8bXMIjhOsXG-q2oeuFoqFrlnAOW9AJi8SZwt.ttf",
      "500italic": "https://fonts.gstatic.com/s/robotomono/v23/L0xoDF4xlVMF-BfR8bXMIjhOsXG-q2oeuFoqFrlVAOW9AJi8SZwt.ttf",
      "600italic": "https://fonts.gstatic.com/s/robotomono/v23/L0xoDF4xlVMF-BfR8bXMIjhOsXG-q2oeuFoqFrm5B-W9AJi8SZwt.ttf",
      "700italic": "https://fonts.gstatic.com/s/robotomono/v23/L0xoDF4xlVMF-BfR8bXMIjhOsXG-q2oeuFoqFrmAB-W9AJi8SZwt.ttf"
    },
    "category": "monospace",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/robotomono/v23/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_QuW9.ttf"
  },
  {
    "family": "Noto Sans",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "devanagari",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v38",
    "lastModified": "2024-12-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/notosans/v38/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9At9d41P6zHtY.ttf",
      "200": "https://fonts.gstatic.com/s/notosans/v38/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyB9A99d41P6zHtY.ttf",
      "300": "https://fonts.gstatic.com/s/notosans/v38/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyCjA99d41P6zHtY.ttf",
      "regular": "https://fonts.gstatic.com/s/notosans/v38/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A99d41P6zHtY.ttf",
      "500": "https://fonts.gstatic.com/s/notosans/v38/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyDPA99d41P6zHtY.ttf",
      "600": "https://fonts.gstatic.com/s/notosans/v38/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyAjBN9d41P6zHtY.ttf",
      "700": "https://fonts.gstatic.com/s/notosans/v38/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyAaBN9d41P6zHtY.ttf",
      "800": "https://fonts.gstatic.com/s/notosans/v38/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyB9BN9d41P6zHtY.ttf",
      "900": "https://fonts.gstatic.com/s/notosans/v38/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyBUBN9d41P6zHtY.ttf",
      "100italic": "https://fonts.gstatic.com/s/notosans/v38/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QDcf6VfYyWtY1rI.ttf",
      "200italic": "https://fonts.gstatic.com/s/notosans/v38/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QLce6VfYyWtY1rI.ttf",
      "300italic": "https://fonts.gstatic.com/s/notosans/v38/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QGke6VfYyWtY1rI.ttf",
      "italic": "https://fonts.gstatic.com/s/notosans/v38/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QDce6VfYyWtY1rI.ttf",
      "500italic": "https://fonts.gstatic.com/s/notosans/v38/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QAUe6VfYyWtY1rI.ttf",
      "600italic": "https://fonts.gstatic.com/s/notosans/v38/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QOkZ6VfYyWtY1rI.ttf",
      "700italic": "https://fonts.gstatic.com/s/notosans/v38/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QNAZ6VfYyWtY1rI.ttf",
      "800italic": "https://fonts.gstatic.com/s/notosans/v38/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QLcZ6VfYyWtY1rI.ttf",
      "900italic": "https://fonts.gstatic.com/s/notosans/v38/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QJ4Z6VfYyWtY1rI.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/notosans/v38/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9c6Vc.ttf"
  },
  {
    "family": "Raleway",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v34",
    "lastModified": "2024-09-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/raleway/v34/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvao4CPNLA3JC9c.ttf",
      "200": "https://fonts.gstatic.com/s/raleway/v34/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVtaooCPNLA3JC9c.ttf",
      "300": "https://fonts.gstatic.com/s/raleway/v34/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVuEooCPNLA3JC9c.ttf",
      "regular": "https://fonts.gstatic.com/s/raleway/v34/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaooCPNLA3JC9c.ttf",
      "500": "https://fonts.gstatic.com/s/raleway/v34/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvoooCPNLA3JC9c.ttf",
      "600": "https://fonts.gstatic.com/s/raleway/v34/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVsEpYCPNLA3JC9c.ttf",
      "700": "https://fonts.gstatic.com/s/raleway/v34/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVs9pYCPNLA3JC9c.ttf",
      "800": "https://fonts.gstatic.com/s/raleway/v34/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVtapYCPNLA3JC9c.ttf",
      "900": "https://fonts.gstatic.com/s/raleway/v34/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVtzpYCPNLA3JC9c.ttf",
      "100italic": "https://fonts.gstatic.com/s/raleway/v34/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4WjNPrQVIT9c2c8.ttf",
      "200italic": "https://fonts.gstatic.com/s/raleway/v34/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4ejMPrQVIT9c2c8.ttf",
      "300italic": "https://fonts.gstatic.com/s/raleway/v34/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4TbMPrQVIT9c2c8.ttf",
      "italic": "https://fonts.gstatic.com/s/raleway/v34/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4WjMPrQVIT9c2c8.ttf",
      "500italic": "https://fonts.gstatic.com/s/raleway/v34/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4VrMPrQVIT9c2c8.ttf",
      "600italic": "https://fonts.gstatic.com/s/raleway/v34/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4bbLPrQVIT9c2c8.ttf",
      "700italic": "https://fonts.gstatic.com/s/raleway/v34/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4Y_LPrQVIT9c2c8.ttf",
      "800italic": "https://fonts.gstatic.com/s/raleway/v34/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4ejLPrQVIT9c2c8.ttf",
      "900italic": "https://fonts.gstatic.com/s/raleway/v34/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4cHLPrQVIT9c2c8.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/raleway/v34/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCOPrQ.ttf"
  },
  {
    "family": "Nunito Sans",
    "variants": [
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v15",
    "lastModified": "2024-09-04",
    "files": {
      "200": "https://fonts.gstatic.com/s/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4GVilntF8kA_Ykqw.ttf",
      "300": "https://fonts.gstatic.com/s/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4GiClntF8kA_Ykqw.ttf",
      "regular": "https://fonts.gstatic.com/s/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4G1ilntF8kA_Ykqw.ttf",
      "500": "https://fonts.gstatic.com/s/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4G5ClntF8kA_Ykqw.ttf",
      "600": "https://fonts.gstatic.com/s/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4GCC5ntF8kA_Ykqw.ttf",
      "700": "https://fonts.gstatic.com/s/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4GMS5ntF8kA_Ykqw.ttf",
      "800": "https://fonts.gstatic.com/s/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4GVi5ntF8kA_Ykqw.ttf",
      "900": "https://fonts.gstatic.com/s/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4Gfy5ntF8kA_Ykqw.ttf",
      "200italic": "https://fonts.gstatic.com/s/nunitosans/v15/pe1kMImSLYBIv1o4X1M8cce4OdVisMz5nZRqy6cmmmU3t2FQWEAEOvV9wNvrwlNstMKW3Y6K5WMwXeVy3GboJ0kTHmoP91UgIfM0qxVd.ttf",
      "300italic": "https://fonts.gstatic.com/s/nunitosans/v15/pe1kMImSLYBIv1o4X1M8cce4OdVisMz5nZRqy6cmmmU3t2FQWEAEOvV9wNvrwlNstMKW3Y6K5WMwXeVy3GboJ0kTHmrR91UgIfM0qxVd.ttf",
      "italic": "https://fonts.gstatic.com/s/nunitosans/v15/pe1kMImSLYBIv1o4X1M8cce4OdVisMz5nZRqy6cmmmU3t2FQWEAEOvV9wNvrwlNstMKW3Y6K5WMwXeVy3GboJ0kTHmqP91UgIfM0qxVd.ttf",
      "500italic": "https://fonts.gstatic.com/s/nunitosans/v15/pe1kMImSLYBIv1o4X1M8cce4OdVisMz5nZRqy6cmmmU3t2FQWEAEOvV9wNvrwlNstMKW3Y6K5WMwXeVy3GboJ0kTHmq991UgIfM0qxVd.ttf",
      "600italic": "https://fonts.gstatic.com/s/nunitosans/v15/pe1kMImSLYBIv1o4X1M8cce4OdVisMz5nZRqy6cmmmU3t2FQWEAEOvV9wNvrwlNstMKW3Y6K5WMwXeVy3GboJ0kTHmpR8FUgIfM0qxVd.ttf",
      "700italic": "https://fonts.gstatic.com/s/nunitosans/v15/pe1kMImSLYBIv1o4X1M8cce4OdVisMz5nZRqy6cmmmU3t2FQWEAEOvV9wNvrwlNstMKW3Y6K5WMwXeVy3GboJ0kTHmpo8FUgIfM0qxVd.ttf",
      "800italic": "https://fonts.gstatic.com/s/nunitosans/v15/pe1kMImSLYBIv1o4X1M8cce4OdVisMz5nZRqy6cmmmU3t2FQWEAEOvV9wNvrwlNstMKW3Y6K5WMwXeVy3GboJ0kTHmoP8FUgIfM0qxVd.ttf",
      "900italic": "https://fonts.gstatic.com/s/nunitosans/v15/pe1kMImSLYBIv1o4X1M8cce4OdVisMz5nZRqy6cmmmU3t2FQWEAEOvV9wNvrwlNstMKW3Y6K5WMwXeVy3GboJ0kTHmom8FUgIfM0qxVd.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4G1ilXtVUg.ttf"
  },
  {
    "family": "Nunito",
    "variants": [
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v26",
    "lastModified": "2024-09-04",
    "files": {
      "200": "https://fonts.gstatic.com/s/nunito/v26/XRXI3I6Li01BKofiOc5wtlZ2di8HDDshRTM9jo7eTWk.ttf",
      "300": "https://fonts.gstatic.com/s/nunito/v26/XRXI3I6Li01BKofiOc5wtlZ2di8HDOUhRTM9jo7eTWk.ttf",
      "regular": "https://fonts.gstatic.com/s/nunito/v26/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshRTM9jo7eTWk.ttf",
      "500": "https://fonts.gstatic.com/s/nunito/v26/XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhRTM9jo7eTWk.ttf",
      "600": "https://fonts.gstatic.com/s/nunito/v26/XRXI3I6Li01BKofiOc5wtlZ2di8HDGUmRTM9jo7eTWk.ttf",
      "700": "https://fonts.gstatic.com/s/nunito/v26/XRXI3I6Li01BKofiOc5wtlZ2di8HDFwmRTM9jo7eTWk.ttf",
      "800": "https://fonts.gstatic.com/s/nunito/v26/XRXI3I6Li01BKofiOc5wtlZ2di8HDDsmRTM9jo7eTWk.ttf",
      "900": "https://fonts.gstatic.com/s/nunito/v26/XRXI3I6Li01BKofiOc5wtlZ2di8HDBImRTM9jo7eTWk.ttf",
      "200italic": "https://fonts.gstatic.com/s/nunito/v26/XRXK3I6Li01BKofIMPyPbj8d7IEAGXNiLXA3iqzbXWnoeg.ttf",
      "300italic": "https://fonts.gstatic.com/s/nunito/v26/XRXK3I6Li01BKofIMPyPbj8d7IEAGXNi83A3iqzbXWnoeg.ttf",
      "italic": "https://fonts.gstatic.com/s/nunito/v26/XRXK3I6Li01BKofIMPyPbj8d7IEAGXNirXA3iqzbXWnoeg.ttf",
      "500italic": "https://fonts.gstatic.com/s/nunito/v26/XRXK3I6Li01BKofIMPyPbj8d7IEAGXNin3A3iqzbXWnoeg.ttf",
      "600italic": "https://fonts.gstatic.com/s/nunito/v26/XRXK3I6Li01BKofIMPyPbj8d7IEAGXNic3c3iqzbXWnoeg.ttf",
      "700italic": "https://fonts.gstatic.com/s/nunito/v26/XRXK3I6Li01BKofIMPyPbj8d7IEAGXNiSnc3iqzbXWnoeg.ttf",
      "800italic": "https://fonts.gstatic.com/s/nunito/v26/XRXK3I6Li01BKofIMPyPbj8d7IEAGXNiLXc3iqzbXWnoeg.ttf",
      "900italic": "https://fonts.gstatic.com/s/nunito/v26/XRXK3I6Li01BKofIMPyPbj8d7IEAGXNiBHc3iqzbXWnoeg.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/nunito/v26/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshdTI3ig.ttf"
  },
  {
    "family": "Rubik",
    "variants": [
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "arabic",
      "cyrillic",
      "cyrillic-ext",
      "hebrew",
      "latin",
      "latin-ext"
    ],
    "version": "v28",
    "lastModified": "2024-09-04",
    "files": {
      "300": "https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-WYi1UE80V4bVkA.ttf",
      "regular": "https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4i1UE80V4bVkA.ttf",
      "500": "https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-NYi1UE80V4bVkA.ttf",
      "600": "https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-2Y-1UE80V4bVkA.ttf",
      "700": "https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-4I-1UE80V4bVkA.ttf",
      "800": "https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-h4-1UE80V4bVkA.ttf",
      "900": "https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-ro-1UE80V4bVkA.ttf",
      "300italic": "https://fonts.gstatic.com/s/rubik/v28/iJWbBXyIfDnIV7nEt3KSJbVDV49rz8sDE0UwdYPFkJ1O.ttf",
      "italic": "https://fonts.gstatic.com/s/rubik/v28/iJWbBXyIfDnIV7nEt3KSJbVDV49rz8tdE0UwdYPFkJ1O.ttf",
      "500italic": "https://fonts.gstatic.com/s/rubik/v28/iJWbBXyIfDnIV7nEt3KSJbVDV49rz8tvE0UwdYPFkJ1O.ttf",
      "600italic": "https://fonts.gstatic.com/s/rubik/v28/iJWbBXyIfDnIV7nEt3KSJbVDV49rz8uDFEUwdYPFkJ1O.ttf",
      "700italic": "https://fonts.gstatic.com/s/rubik/v28/iJWbBXyIfDnIV7nEt3KSJbVDV49rz8u6FEUwdYPFkJ1O.ttf",
      "800italic": "https://fonts.gstatic.com/s/rubik/v28/iJWbBXyIfDnIV7nEt3KSJbVDV49rz8vdFEUwdYPFkJ1O.ttf",
      "900italic": "https://fonts.gstatic.com/s/rubik/v28/iJWbBXyIfDnIV7nEt3KSJbVDV49rz8v0FEUwdYPFkJ1O.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFUUUw.ttf"
  },
  {
    "family": "Ubuntu",
    "variants": [
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "700",
      "700italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext"
    ],
    "version": "v20",
    "lastModified": "2024-09-04",
    "files": {
      "300": "https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoC1CzTt2aMH4V_gg.ttf",
      "300italic": "https://fonts.gstatic.com/s/ubuntu/v20/4iCp6KVjbNBYlgoKejZftWyIPYBvgpUI.ttf",
      "regular": "https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgo6eAT3v02QFg.ttf",
      "italic": "https://fonts.gstatic.com/s/ubuntu/v20/4iCu6KVjbNBYlgoKeg7znUiAFpxm.ttf",
      "500": "https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCjC3Tt2aMH4V_gg.ttf",
      "500italic": "https://fonts.gstatic.com/s/ubuntu/v20/4iCp6KVjbNBYlgoKejYHtGyIPYBvgpUI.ttf",
      "700": "https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCxCvTt2aMH4V_gg.ttf",
      "700italic": "https://fonts.gstatic.com/s/ubuntu/v20/4iCp6KVjbNBYlgoKejZPsmyIPYBvgpUI.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKeQ7z.ttf"
  },
  {
    "family": "Playfair Display",
    "variants": [
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "cyrillic",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v37",
    "lastModified": "2024-09-04",
    "files": {
      "regular": "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvUDQZNLo_U2r.ttf",
      "500": "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKd3vUDQZNLo_U2r.ttf",
      "600": "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKebukDQZNLo_U2r.ttf",
      "700": "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKeiukDQZNLo_U2r.ttf",
      "800": "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKfFukDQZNLo_U2r.ttf",
      "900": "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKfsukDQZNLo_U2r.ttf",
      "italic": "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_qiTbtbK-F2rA0s.ttf",
      "500italic": "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_pqTbtbK-F2rA0s.ttf",
      "600italic": "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_naUbtbK-F2rA0s.ttf",
      "700italic": "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_k-UbtbK-F2rA0s.ttf",
      "800italic": "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_iiUbtbK-F2rA0s.ttf",
      "900italic": "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_gGUbtbK-F2rA0s.ttf"
    },
    "category": "serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDRbtY.ttf"
  },
  {
    "family": "Merriweather",
    "variants": [
      "300",
      "300italic",
      "regular",
      "italic",
      "700",
      "700italic",
      "900",
      "900italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v30",
    "lastModified": "2024-09-04",
    "files": {
      "300": "https://fonts.gstatic.com/s/merriweather/v30/u-4n0qyriQwlOrhSvowK_l521wRpX837pvjxPA.ttf",
      "300italic": "https://fonts.gstatic.com/s/merriweather/v30/u-4l0qyriQwlOrhSvowK_l5-eR7lXcf_hP3hPGWH.ttf",
      "regular": "https://fonts.gstatic.com/s/merriweather/v30/u-440qyriQwlOrhSvowK_l5OeyxNV-bnrw.ttf",
      "italic": "https://fonts.gstatic.com/s/merriweather/v30/u-4m0qyriQwlOrhSvowK_l5-eSZJdeP3r-Ho.ttf",
      "700": "https://fonts.gstatic.com/s/merriweather/v30/u-4n0qyriQwlOrhSvowK_l52xwNpX837pvjxPA.ttf",
      "700italic": "https://fonts.gstatic.com/s/merriweather/v30/u-4l0qyriQwlOrhSvowK_l5-eR71Wsf_hP3hPGWH.ttf",
      "900": "https://fonts.gstatic.com/s/merriweather/v30/u-4n0qyriQwlOrhSvowK_l52_wFpX837pvjxPA.ttf",
      "900italic": "https://fonts.gstatic.com/s/merriweather/v30/u-4l0qyriQwlOrhSvowK_l5-eR7NWMf_hP3hPGWH.ttf"
    },
    "category": "serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/merriweather/v30/u-440qyriQwlOrhSvowK_l5-eiZJ.ttf"
  },
  {
    "family": "Noto Sans KR",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900"
    ],
    "subsets": [
      "cyrillic",
      "korean",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v36",
    "lastModified": "2023-08-17",
    "files": {
      "100": "https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuozeLTq8H4hfeE.ttf",
      "200": "https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmoyeLTq8H4hfeE.ttf",
      "300": "https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzrQyeLTq8H4hfeE.ttf",
      "regular": "https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLTq8H4hfeE.ttf",
      "500": "https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLTq8H4hfeE.ttf",
      "600": "https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLTq8H4hfeE.ttf",
      "700": "https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLTq8H4hfeE.ttf",
      "800": "https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLTq8H4hfeE.ttf",
      "900": "https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLTq8H4hfeE.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoySLXg9A.ttf"
  },
  {
    "family": "Roboto Slab",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v34",
    "lastModified": "2024-09-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/robotoslab/v34/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojIWWaG5iddG-1A.ttf",
      "200": "https://fonts.gstatic.com/s/robotoslab/v34/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjoDISWaG5iddG-1A.ttf",
      "300": "https://fonts.gstatic.com/s/robotoslab/v34/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjo0oSWaG5iddG-1A.ttf",
      "regular": "https://fonts.gstatic.com/s/robotoslab/v34/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISWaG5iddG-1A.ttf",
      "500": "https://fonts.gstatic.com/s/robotoslab/v34/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjovoSWaG5iddG-1A.ttf",
      "600": "https://fonts.gstatic.com/s/robotoslab/v34/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjoUoOWaG5iddG-1A.ttf",
      "700": "https://fonts.gstatic.com/s/robotoslab/v34/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjoa4OWaG5iddG-1A.ttf",
      "800": "https://fonts.gstatic.com/s/robotoslab/v34/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjoDIOWaG5iddG-1A.ttf",
      "900": "https://fonts.gstatic.com/s/robotoslab/v34/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjoJYOWaG5iddG-1A.ttf"
    },
    "category": "serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/robotoslab/v34/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmaWRm.ttf"
  },
  {
    "family": "PT Sans",
    "variants": [
      "regular",
      "italic",
      "700",
      "700italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "latin",
      "latin-ext"
    ],
    "version": "v17",
    "lastModified": "2024-08-12",
    "files": {
      "regular": "https://fonts.gstatic.com/s/ptsans/v17/jizaRExUiTo99u79P0WOxOGMMDQ.ttf",
      "italic": "https://fonts.gstatic.com/s/ptsans/v17/jizYRExUiTo99u79D0eEwMOJIDQA-g.ttf",
      "700": "https://fonts.gstatic.com/s/ptsans/v17/jizfRExUiTo99u79B_mh4OmnLD0Z4zM.ttf",
      "700italic": "https://fonts.gstatic.com/s/ptsans/v17/jizdRExUiTo99u79D0e8fOytKB8c8zMrig.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/ptsans/v17/jizaRExUiTo99u79D0SEwA.ttf"
  },
  {
    "family": "Kanit",
    "variants": [
      "100",
      "100italic",
      "200",
      "200italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "600",
      "600italic",
      "700",
      "700italic",
      "800",
      "800italic",
      "900",
      "900italic"
    ],
    "subsets": [
      "latin",
      "latin-ext",
      "thai",
      "vietnamese"
    ],
    "version": "v15",
    "lastModified": "2024-09-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/kanit/v15/nKKX-Go6G5tXcr72GwWKcaxALFs.ttf",
      "100italic": "https://fonts.gstatic.com/s/kanit/v15/nKKV-Go6G5tXcraQI2GAdY5FPFtrGw.ttf",
      "200": "https://fonts.gstatic.com/s/kanit/v15/nKKU-Go6G5tXcr5aOiWgX6BJNUJy.ttf",
      "200italic": "https://fonts.gstatic.com/s/kanit/v15/nKKS-Go6G5tXcraQI82hVaRrMFJyAu4.ttf",
      "300": "https://fonts.gstatic.com/s/kanit/v15/nKKU-Go6G5tXcr4-OSWgX6BJNUJy.ttf",
      "300italic": "https://fonts.gstatic.com/s/kanit/v15/nKKS-Go6G5tXcraQI6miVaRrMFJyAu4.ttf",
      "regular": "https://fonts.gstatic.com/s/kanit/v15/nKKZ-Go6G5tXcoaSEQGodLxA.ttf",
      "italic": "https://fonts.gstatic.com/s/kanit/v15/nKKX-Go6G5tXcraQGwWKcaxALFs.ttf",
      "500": "https://fonts.gstatic.com/s/kanit/v15/nKKU-Go6G5tXcr5mOCWgX6BJNUJy.ttf",
      "500italic": "https://fonts.gstatic.com/s/kanit/v15/nKKS-Go6G5tXcraQI_GjVaRrMFJyAu4.ttf",
      "600": "https://fonts.gstatic.com/s/kanit/v15/nKKU-Go6G5tXcr5KPyWgX6BJNUJy.ttf",
      "600italic": "https://fonts.gstatic.com/s/kanit/v15/nKKS-Go6G5tXcraQI92kVaRrMFJyAu4.ttf",
      "700": "https://fonts.gstatic.com/s/kanit/v15/nKKU-Go6G5tXcr4uPiWgX6BJNUJy.ttf",
      "700italic": "https://fonts.gstatic.com/s/kanit/v15/nKKS-Go6G5tXcraQI7mlVaRrMFJyAu4.ttf",
      "800": "https://fonts.gstatic.com/s/kanit/v15/nKKU-Go6G5tXcr4yPSWgX6BJNUJy.ttf",
      "800italic": "https://fonts.gstatic.com/s/kanit/v15/nKKS-Go6G5tXcraQI6WmVaRrMFJyAu4.ttf",
      "900": "https://fonts.gstatic.com/s/kanit/v15/nKKU-Go6G5tXcr4WPCWgX6BJNUJy.ttf",
      "900italic": "https://fonts.gstatic.com/s/kanit/v15/nKKS-Go6G5tXcraQI4GnVaRrMFJyAu4.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/kanit/v15/nKKZ-Go6G5tXcraTGwU.ttf"
  },
  {
    "family": "Work Sans",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v19",
    "lastModified": "2024-09-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nWNigDp6_cOyA.ttf",
      "200": "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K8nXNigDp6_cOyA.ttf",
      "300": "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32KxfXNigDp6_cOyA.ttf",
      "regular": "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXNigDp6_cOyA.ttf",
      "500": "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K3vXNigDp6_cOyA.ttf",
      "600": "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQNigDp6_cOyA.ttf",
      "700": "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QNigDp6_cOyA.ttf",
      "800": "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K8nQNigDp6_cOyA.ttf",
      "900": "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K-DQNigDp6_cOyA.ttf",
      "100italic": "https://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGU3moJo43ZKyDSQQ.ttf",
      "200italic": "https://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGUXmsJo43ZKyDSQQ.ttf",
      "300italic": "https://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGUgGsJo43ZKyDSQQ.ttf",
      "italic": "https://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGU3msJo43ZKyDSQQ.ttf",
      "500italic": "https://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGU7GsJo43ZKyDSQQ.ttf",
      "600italic": "https://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGUAGwJo43ZKyDSQQ.ttf",
      "700italic": "https://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGUOWwJo43ZKyDSQQ.ttf",
      "800italic": "https://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGUXmwJo43ZKyDSQQ.ttf",
      "900italic": "https://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGUd2wJo43ZKyDSQQ.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBikJow.ttf"
  },
  {
    "family": "Lora",
    "variants": [
      "regular",
      "500",
      "600",
      "700",
      "italic",
      "500italic",
      "600italic",
      "700italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "latin",
      "latin-ext",
      "math",
      "symbols",
      "vietnamese"
    ],
    "version": "v35",
    "lastModified": "2024-09-04",
    "files": {
      "regular": "https://fonts.gstatic.com/s/lora/v35/0QI6MX1D_JOuGQbT0gvTJPa787weuyJGmKxemMeZ.ttf",
      "500": "https://fonts.gstatic.com/s/lora/v35/0QI6MX1D_JOuGQbT0gvTJPa787wsuyJGmKxemMeZ.ttf",
      "600": "https://fonts.gstatic.com/s/lora/v35/0QI6MX1D_JOuGQbT0gvTJPa787zAvCJGmKxemMeZ.ttf",
      "700": "https://fonts.gstatic.com/s/lora/v35/0QI6MX1D_JOuGQbT0gvTJPa787z5vCJGmKxemMeZ.ttf",
      "italic": "https://fonts.gstatic.com/s/lora/v35/0QI8MX1D_JOuMw_hLdO6T2wV9KnW-MoFkqh8ndeZzZ0.ttf",
      "500italic": "https://fonts.gstatic.com/s/lora/v35/0QI8MX1D_JOuMw_hLdO6T2wV9KnW-PgFkqh8ndeZzZ0.ttf",
      "600italic": "https://fonts.gstatic.com/s/lora/v35/0QI8MX1D_JOuMw_hLdO6T2wV9KnW-BQCkqh8ndeZzZ0.ttf",
      "700italic": "https://fonts.gstatic.com/s/lora/v35/0QI8MX1D_JOuMw_hLdO6T2wV9KnW-C0Ckqh8ndeZzZ0.ttf"
    },
    "category": "serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/lora/v35/0QI6MX1D_JOuGQbT0gvTJPa787weuxJHkqg.ttf"
  },
  {
    "family": "DM Sans",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "latin",
      "latin-ext"
    ],
    "version": "v15",
    "lastModified": "2024-09-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAop1hTmf3ZGMZpg.ttf",
      "200": "https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAIpxhTmf3ZGMZpg.ttf",
      "300": "https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwA_JxhTmf3ZGMZpg.ttf",
      "regular": "https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhTmf3ZGMZpg.ttf",
      "500": "https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhTmf3ZGMZpg.ttf",
      "600": "https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAfJthTmf3ZGMZpg.ttf",
      "700": "https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthTmf3ZGMZpg.ttf",
      "800": "https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAIpthTmf3ZGMZpg.ttf",
      "900": "https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAC5thTmf3ZGMZpg.ttf",
      "100italic": "https://fonts.gstatic.com/s/dmsans/v15/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat-JDG3zRmYJpso5.ttf",
      "200italic": "https://fonts.gstatic.com/s/dmsans/v15/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat8JDW3zRmYJpso5.ttf",
      "300italic": "https://fonts.gstatic.com/s/dmsans/v15/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat_XDW3zRmYJpso5.ttf",
      "italic": "https://fonts.gstatic.com/s/dmsans/v15/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat-JDW3zRmYJpso5.ttf",
      "500italic": "https://fonts.gstatic.com/s/dmsans/v15/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat-7DW3zRmYJpso5.ttf",
      "600italic": "https://fonts.gstatic.com/s/dmsans/v15/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat9XCm3zRmYJpso5.ttf",
      "700italic": "https://fonts.gstatic.com/s/dmsans/v15/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat9uCm3zRmYJpso5.ttf",
      "800italic": "https://fonts.gstatic.com/s/dmsans/v15/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat8JCm3zRmYJpso5.ttf",
      "900italic": "https://fonts.gstatic.com/s/dmsans/v15/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat8gCm3zRmYJpso5.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxRT23z.ttf"
  },
  {
    "family": "Mulish",
    "variants": [
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v13",
    "lastModified": "2024-09-04",
    "files": {
      "200": "https://fonts.gstatic.com/s/mulish/v13/1Ptyg83HX_SGhgqO0yLcmjzUAuWexRNRwaClGrw-PTY.ttf",
      "300": "https://fonts.gstatic.com/s/mulish/v13/1Ptyg83HX_SGhgqO0yLcmjzUAuWexc1RwaClGrw-PTY.ttf",
      "regular": "https://fonts.gstatic.com/s/mulish/v13/1Ptyg83HX_SGhgqO0yLcmjzUAuWexZNRwaClGrw-PTY.ttf",
      "500": "https://fonts.gstatic.com/s/mulish/v13/1Ptyg83HX_SGhgqO0yLcmjzUAuWexaFRwaClGrw-PTY.ttf",
      "600": "https://fonts.gstatic.com/s/mulish/v13/1Ptyg83HX_SGhgqO0yLcmjzUAuWexU1WwaClGrw-PTY.ttf",
      "700": "https://fonts.gstatic.com/s/mulish/v13/1Ptyg83HX_SGhgqO0yLcmjzUAuWexXRWwaClGrw-PTY.ttf",
      "800": "https://fonts.gstatic.com/s/mulish/v13/1Ptyg83HX_SGhgqO0yLcmjzUAuWexRNWwaClGrw-PTY.ttf",
      "900": "https://fonts.gstatic.com/s/mulish/v13/1Ptyg83HX_SGhgqO0yLcmjzUAuWexTpWwaClGrw-PTY.ttf",
      "200italic": "https://fonts.gstatic.com/s/mulish/v13/1Ptwg83HX_SGhgqk2hAjQlW_mEuZ0FsSqeOvHp47LTZFwA.ttf",
      "300italic": "https://fonts.gstatic.com/s/mulish/v13/1Ptwg83HX_SGhgqk2hAjQlW_mEuZ0FsSd-OvHp47LTZFwA.ttf",
      "italic": "https://fonts.gstatic.com/s/mulish/v13/1Ptwg83HX_SGhgqk2hAjQlW_mEuZ0FsSKeOvHp47LTZFwA.ttf",
      "500italic": "https://fonts.gstatic.com/s/mulish/v13/1Ptwg83HX_SGhgqk2hAjQlW_mEuZ0FsSG-OvHp47LTZFwA.ttf",
      "600italic": "https://fonts.gstatic.com/s/mulish/v13/1Ptwg83HX_SGhgqk2hAjQlW_mEuZ0FsS9-SvHp47LTZFwA.ttf",
      "700italic": "https://fonts.gstatic.com/s/mulish/v13/1Ptwg83HX_SGhgqk2hAjQlW_mEuZ0FsSzuSvHp47LTZFwA.ttf",
      "800italic": "https://fonts.gstatic.com/s/mulish/v13/1Ptwg83HX_SGhgqk2hAjQlW_mEuZ0FsSqeSvHp47LTZFwA.ttf",
      "900italic": "https://fonts.gstatic.com/s/mulish/v13/1Ptwg83HX_SGhgqk2hAjQlW_mEuZ0FsSgOSvHp47LTZFwA.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/mulish/v13/1Ptyg83HX_SGhgqO0yLcmjzUAuWexZNR8aGvHg.ttf"
  },
  {
    "family": "Noto Sans TC",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900"
    ],
    "subsets": [
      "chinese-traditional",
      "cyrillic",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v36",
    "lastModified": "2024-07-30",
    "files": {
      "100": "https://fonts.gstatic.com/s/notosanstc/v36/-nFuOG829Oofr2wohFbTp9ifNAn722rq0MXz76Cz_CpOtma3uNQ.ttf",
      "200": "https://fonts.gstatic.com/s/notosanstc/v36/-nFuOG829Oofr2wohFbTp9ifNAn722rq0MXz7yCy_CpOtma3uNQ.ttf",
      "300": "https://fonts.gstatic.com/s/notosanstc/v36/-nFuOG829Oofr2wohFbTp9ifNAn722rq0MXz7_6y_CpOtma3uNQ.ttf",
      "regular": "https://fonts.gstatic.com/s/notosanstc/v36/-nFuOG829Oofr2wohFbTp9ifNAn722rq0MXz76Cy_CpOtma3uNQ.ttf",
      "500": "https://fonts.gstatic.com/s/notosanstc/v36/-nFuOG829Oofr2wohFbTp9ifNAn722rq0MXz75Ky_CpOtma3uNQ.ttf",
      "600": "https://fonts.gstatic.com/s/notosanstc/v36/-nFuOG829Oofr2wohFbTp9ifNAn722rq0MXz7361_CpOtma3uNQ.ttf",
      "700": "https://fonts.gstatic.com/s/notosanstc/v36/-nFuOG829Oofr2wohFbTp9ifNAn722rq0MXz70e1_CpOtma3uNQ.ttf",
      "800": "https://fonts.gstatic.com/s/notosanstc/v36/-nFuOG829Oofr2wohFbTp9ifNAn722rq0MXz7yC1_CpOtma3uNQ.ttf",
      "900": "https://fonts.gstatic.com/s/notosanstc/v36/-nFuOG829Oofr2wohFbTp9ifNAn722rq0MXz7wm1_CpOtma3uNQ.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/notosanstc/v36/-nFuOG829Oofr2wohFbTp9ifNAn722rq0MXz76CyzCtEsg.ttf"
  },
  {
    "family": "Fira Sans",
    "variants": [
      "100",
      "100italic",
      "200",
      "200italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "600",
      "600italic",
      "700",
      "700italic",
      "800",
      "800italic",
      "900",
      "900italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v17",
    "lastModified": "2024-09-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/firasans/v17/va9C4kDNxMZdWfMOD5Vn9IjOazP3dUTP.ttf",
      "100italic": "https://fonts.gstatic.com/s/firasans/v17/va9A4kDNxMZdWfMOD5VvkrCqYTfVcFTPj0s.ttf",
      "200": "https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnWKnuQR37fF3Wlg.ttf",
      "200italic": "https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrAGQBf_XljGllLX.ttf",
      "300": "https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnPKruQR37fF3Wlg.ttf",
      "300italic": "https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrBiQxf_XljGllLX.ttf",
      "regular": "https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VfkILKSTbndQ.ttf",
      "italic": "https://fonts.gstatic.com/s/firasans/v17/va9C4kDNxMZdWfMOD5VvkojOazP3dUTP.ttf",
      "500": "https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnZKvuQR37fF3Wlg.ttf",
      "500italic": "https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrA6Qhf_XljGllLX.ttf",
      "600": "https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnSKzuQR37fF3Wlg.ttf",
      "600italic": "https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrAWRRf_XljGllLX.ttf",
      "700": "https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnLK3uQR37fF3Wlg.ttf",
      "700italic": "https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrByRBf_XljGllLX.ttf",
      "800": "https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7uQR37fF3Wlg.ttf",
      "800italic": "https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrBuRxf_XljGllLX.ttf",
      "900": "https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnFK_uQR37fF3Wlg.ttf",
      "900italic": "https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrBKRhf_XljGllLX.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvkYjO.ttf"
  },
  {
    "family": "Manrope",
    "variants": [
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v15",
    "lastModified": "2024-08-12",
    "files": {
      "200": "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk59FO_F87jxeN7B.ttf",
      "300": "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk6jFO_F87jxeN7B.ttf",
      "regular": "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FO_F87jxeN7B.ttf",
      "500": "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFO_F87jxeN7B.ttf",
      "600": "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4jE-_F87jxeN7B.ttf",
      "700": "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE-_F87jxeN7B.ttf",
      "800": "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk59E-_F87jxeN7B.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FN_E-bw.ttf"
  },
  {
    "family": "Quicksand",
    "variants": [
      "300",
      "regular",
      "500",
      "600",
      "700"
    ],
    "subsets": [
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v31",
    "lastModified": "2024-09-04",
    "files": {
      "300": "https://fonts.gstatic.com/s/quicksand/v31/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkKEo18G0wx40QDw.ttf",
      "regular": "https://fonts.gstatic.com/s/quicksand/v31/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o18G0wx40QDw.ttf",
      "500": "https://fonts.gstatic.com/s/quicksand/v31/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkM0o18G0wx40QDw.ttf",
      "600": "https://fonts.gstatic.com/s/quicksand/v31/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkCEv18G0wx40QDw.ttf",
      "700": "https://fonts.gstatic.com/s/quicksand/v31/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkBgv18G0wx40QDw.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/quicksand/v31/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58C-xw.ttf"
  },
  {
    "family": "Barlow",
    "variants": [
      "100",
      "100italic",
      "200",
      "200italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "600",
      "600italic",
      "700",
      "700italic",
      "800",
      "800italic",
      "900",
      "900italic"
    ],
    "subsets": [
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v12",
    "lastModified": "2024-09-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/barlow/v12/7cHrv4kjgoGqM7E3b8s8yn4hnCci.ttf",
      "100italic": "https://fonts.gstatic.com/s/barlow/v12/7cHtv4kjgoGqM7E_CfNYwHoDmTcibrA.ttf",
      "200": "https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3w-oc4FAtlT47dw.ttf",
      "200italic": "https://fonts.gstatic.com/s/barlow/v12/7cHsv4kjgoGqM7E_CfP04Voptzsrd6m9.ttf",
      "300": "https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3p-kc4FAtlT47dw.ttf",
      "300italic": "https://fonts.gstatic.com/s/barlow/v12/7cHsv4kjgoGqM7E_CfOQ4loptzsrd6m9.ttf",
      "regular": "https://fonts.gstatic.com/s/barlow/v12/7cHpv4kjgoGqM7EPC8E46HsxnA.ttf",
      "italic": "https://fonts.gstatic.com/s/barlow/v12/7cHrv4kjgoGqM7E_Ccs8yn4hnCci.ttf",
      "500": "https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3_-gc4FAtlT47dw.ttf",
      "500italic": "https://fonts.gstatic.com/s/barlow/v12/7cHsv4kjgoGqM7E_CfPI41optzsrd6m9.ttf",
      "600": "https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E30-8c4FAtlT47dw.ttf",
      "600italic": "https://fonts.gstatic.com/s/barlow/v12/7cHsv4kjgoGqM7E_CfPk5Foptzsrd6m9.ttf",
      "700": "https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3t-4c4FAtlT47dw.ttf",
      "700italic": "https://fonts.gstatic.com/s/barlow/v12/7cHsv4kjgoGqM7E_CfOA5Voptzsrd6m9.ttf",
      "800": "https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3q-0c4FAtlT47dw.ttf",
      "800italic": "https://fonts.gstatic.com/s/barlow/v12/7cHsv4kjgoGqM7E_CfOc5loptzsrd6m9.ttf",
      "900": "https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3j-wc4FAtlT47dw.ttf",
      "900italic": "https://fonts.gstatic.com/s/barlow/v12/7cHsv4kjgoGqM7E_CfO451optzsrd6m9.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/barlow/v12/7cHpv4kjgoGqM7E_Css8.ttf"
  },
  {
    "family": "Material Symbols Outlined",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700"
    ],
    "subsets": [
      "latin"
    ],
    "version": "v225",
    "lastModified": "2025-01-23",
    "files": {
      "100": "https://fonts.gstatic.com/s/materialsymbolsoutlined/v225/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1v-p_4MrImHCIJIZrDCvHeembd5zrTgt.ttf",
      "200": "https://fonts.gstatic.com/s/materialsymbolsoutlined/v225/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1v-p_4MrImHCIJIZrDAvHOembd5zrTgt.ttf",
      "300": "https://fonts.gstatic.com/s/materialsymbolsoutlined/v225/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1v-p_4MrImHCIJIZrDDxHOembd5zrTgt.ttf",
      "regular": "https://fonts.gstatic.com/s/materialsymbolsoutlined/v225/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1v-p_4MrImHCIJIZrDCvHOembd5zrTgt.ttf",
      "500": "https://fonts.gstatic.com/s/materialsymbolsoutlined/v225/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1v-p_4MrImHCIJIZrDCdHOembd5zrTgt.ttf",
      "600": "https://fonts.gstatic.com/s/materialsymbolsoutlined/v225/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1v-p_4MrImHCIJIZrDBxG-embd5zrTgt.ttf",
      "700": "https://fonts.gstatic.com/s/materialsymbolsoutlined/v225/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1v-p_4MrImHCIJIZrDBIG-embd5zrTgt.ttf"
    },
    "category": "monospace",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/materialsymbolsoutlined/v225/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1v-p_4MrImHCIJIZrDCvHNenZ9o.ttf"
  },
  {
    "family": "Heebo",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900"
    ],
    "subsets": [
      "hebrew",
      "latin",
      "latin-ext",
      "math",
      "symbols"
    ],
    "version": "v26",
    "lastModified": "2024-09-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/heebo/v26/NGSpv5_NC0k9P_v6ZUCbLRAHxK1EiS2cckOnz02SXQ.ttf",
      "200": "https://fonts.gstatic.com/s/heebo/v26/NGSpv5_NC0k9P_v6ZUCbLRAHxK1ECSycckOnz02SXQ.ttf",
      "300": "https://fonts.gstatic.com/s/heebo/v26/NGSpv5_NC0k9P_v6ZUCbLRAHxK1E1yycckOnz02SXQ.ttf",
      "regular": "https://fonts.gstatic.com/s/heebo/v26/NGSpv5_NC0k9P_v6ZUCbLRAHxK1EiSycckOnz02SXQ.ttf",
      "500": "https://fonts.gstatic.com/s/heebo/v26/NGSpv5_NC0k9P_v6ZUCbLRAHxK1EuyycckOnz02SXQ.ttf",
      "600": "https://fonts.gstatic.com/s/heebo/v26/NGSpv5_NC0k9P_v6ZUCbLRAHxK1EVyucckOnz02SXQ.ttf",
      "700": "https://fonts.gstatic.com/s/heebo/v26/NGSpv5_NC0k9P_v6ZUCbLRAHxK1EbiucckOnz02SXQ.ttf",
      "800": "https://fonts.gstatic.com/s/heebo/v26/NGSpv5_NC0k9P_v6ZUCbLRAHxK1ECSucckOnz02SXQ.ttf",
      "900": "https://fonts.gstatic.com/s/heebo/v26/NGSpv5_NC0k9P_v6ZUCbLRAHxK1EICucckOnz02SXQ.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/heebo/v26/NGSpv5_NC0k9P_v6ZUCbLRAHxK1EiSysc0mj.ttf"
  },
  {
    "family": "IBM Plex Sans",
    "variants": [
      "100",
      "100italic",
      "200",
      "200italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "600",
      "600italic",
      "700",
      "700italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v19",
    "lastModified": "2024-09-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/ibmplexsans/v19/zYX-KVElMYYaJe8bpLHnCwDKjbLeEKxIedbzDw.ttf",
      "100italic": "https://fonts.gstatic.com/s/ibmplexsans/v19/zYX8KVElMYYaJe8bpLHnCwDKhdTmdKZMW9PjD3N8.ttf",
      "200": "https://fonts.gstatic.com/s/ibmplexsans/v19/zYX9KVElMYYaJe8bpLHnCwDKjR7_MIZmdd_qFmo.ttf",
      "200italic": "https://fonts.gstatic.com/s/ibmplexsans/v19/zYX7KVElMYYaJe8bpLHnCwDKhdTm2Idscf3vBmpl8A.ttf",
      "300": "https://fonts.gstatic.com/s/ibmplexsans/v19/zYX9KVElMYYaJe8bpLHnCwDKjXr8MIZmdd_qFmo.ttf",
      "300italic": "https://fonts.gstatic.com/s/ibmplexsans/v19/zYX7KVElMYYaJe8bpLHnCwDKhdTmvIRscf3vBmpl8A.ttf",
      "regular": "https://fonts.gstatic.com/s/ibmplexsans/v19/zYXgKVElMYYaJe8bpLHnCwDKtdbUFI5NadY.ttf",
      "italic": "https://fonts.gstatic.com/s/ibmplexsans/v19/zYX-KVElMYYaJe8bpLHnCwDKhdTeEKxIedbzDw.ttf",
      "500": "https://fonts.gstatic.com/s/ibmplexsans/v19/zYX9KVElMYYaJe8bpLHnCwDKjSL9MIZmdd_qFmo.ttf",
      "500italic": "https://fonts.gstatic.com/s/ibmplexsans/v19/zYX7KVElMYYaJe8bpLHnCwDKhdTm5IVscf3vBmpl8A.ttf",
      "600": "https://fonts.gstatic.com/s/ibmplexsans/v19/zYX9KVElMYYaJe8bpLHnCwDKjQ76MIZmdd_qFmo.ttf",
      "600italic": "https://fonts.gstatic.com/s/ibmplexsans/v19/zYX7KVElMYYaJe8bpLHnCwDKhdTmyIJscf3vBmpl8A.ttf",
      "700": "https://fonts.gstatic.com/s/ibmplexsans/v19/zYX9KVElMYYaJe8bpLHnCwDKjWr7MIZmdd_qFmo.ttf",
      "700italic": "https://fonts.gstatic.com/s/ibmplexsans/v19/zYX7KVElMYYaJe8bpLHnCwDKhdTmrINscf3vBmpl8A.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/ibmplexsans/v19/zYXgKVElMYYaJe8bpLHnCwDKhdfeEA.ttf"
  },
  {
    "family": "Bebas Neue",
    "variants": [
      "regular"
    ],
    "subsets": [
      "latin",
      "latin-ext"
    ],
    "version": "v14",
    "lastModified": "2024-09-04",
    "files": {
      "regular": "https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXooxW5rygbi49c.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXoo9W9hzg.ttf"
  },
  {
    "family": "Titillium Web",
    "variants": [
      "200",
      "200italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "600",
      "600italic",
      "700",
      "700italic",
      "900"
    ],
    "subsets": [
      "latin",
      "latin-ext"
    ],
    "version": "v17",
    "lastModified": "2024-09-04",
    "files": {
      "200": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffAzHKIx5YrSYqWM.ttf",
      "200italic": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPFcZTIAOhVxoMyOr9n_E7fdMbewI1zZpaduWMmxA.ttf",
      "300": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffGjEKIx5YrSYqWM.ttf",
      "300italic": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPFcZTIAOhVxoMyOr9n_E7fdMbepI5zZpaduWMmxA.ttf",
      "regular": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPecZTIAOhVxoMyOr9n_E7fRMTsDIRSfr0.ttf",
      "italic": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPAcZTIAOhVxoMyOr9n_E7fdMbmCKZXbr2BsA.ttf",
      "600": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffBzCKIx5YrSYqWM.ttf",
      "600italic": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPFcZTIAOhVxoMyOr9n_E7fdMbe0IhzZpaduWMmxA.ttf",
      "700": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffHjDKIx5YrSYqWM.ttf",
      "700italic": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPFcZTIAOhVxoMyOr9n_E7fdMbetIlzZpaduWMmxA.ttf",
      "900": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffEDBKIx5YrSYqWM.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPecZTIAOhVxoMyOr9n_E7fdMXmCA.ttf"
  },
  {
    "family": "PT Serif",
    "variants": [
      "regular",
      "italic",
      "700",
      "700italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "latin",
      "latin-ext"
    ],
    "version": "v18",
    "lastModified": "2024-08-12",
    "files": {
      "regular": "https://fonts.gstatic.com/s/ptserif/v18/EJRVQgYoZZY2vCFuvDFRxL6ddjb-.ttf",
      "italic": "https://fonts.gstatic.com/s/ptserif/v18/EJRTQgYoZZY2vCFuvAFTzrq_cyb-vco.ttf",
      "700": "https://fonts.gstatic.com/s/ptserif/v18/EJRSQgYoZZY2vCFuvAnt65qVXSr3pNNB.ttf",
      "700italic": "https://fonts.gstatic.com/s/ptserif/v18/EJRQQgYoZZY2vCFuvAFT9gaQVy7VocNB6Iw.ttf"
    },
    "category": "serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/ptserif/v18/EJRVQgYoZZY2vCFuvAFQzro.ttf"
  },
  {
    "family": "Karla",
    "variants": [
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic"
    ],
    "subsets": [
      "latin",
      "latin-ext"
    ],
    "version": "v31",
    "lastModified": "2024-09-04",
    "files": {
      "200": "https://fonts.gstatic.com/s/karla/v31/qkBIXvYC6trAT55ZBi1ueQVIjQTDeJqqFENLR7fHGw.ttf",
      "300": "https://fonts.gstatic.com/s/karla/v31/qkBIXvYC6trAT55ZBi1ueQVIjQTDppqqFENLR7fHGw.ttf",
      "regular": "https://fonts.gstatic.com/s/karla/v31/qkBIXvYC6trAT55ZBi1ueQVIjQTD-JqqFENLR7fHGw.ttf",
      "500": "https://fonts.gstatic.com/s/karla/v31/qkBIXvYC6trAT55ZBi1ueQVIjQTDypqqFENLR7fHGw.ttf",
      "600": "https://fonts.gstatic.com/s/karla/v31/qkBIXvYC6trAT55ZBi1ueQVIjQTDJp2qFENLR7fHGw.ttf",
      "700": "https://fonts.gstatic.com/s/karla/v31/qkBIXvYC6trAT55ZBi1ueQVIjQTDH52qFENLR7fHGw.ttf",
      "800": "https://fonts.gstatic.com/s/karla/v31/qkBIXvYC6trAT55ZBi1ueQVIjQTDeJ2qFENLR7fHGw.ttf",
      "200italic": "https://fonts.gstatic.com/s/karla/v31/qkBKXvYC6trAT7RQNNK2EG7SIwPWMNnCV0lPZbLXGxGR.ttf",
      "300italic": "https://fonts.gstatic.com/s/karla/v31/qkBKXvYC6trAT7RQNNK2EG7SIwPWMNkcV0lPZbLXGxGR.ttf",
      "italic": "https://fonts.gstatic.com/s/karla/v31/qkBKXvYC6trAT7RQNNK2EG7SIwPWMNlCV0lPZbLXGxGR.ttf",
      "500italic": "https://fonts.gstatic.com/s/karla/v31/qkBKXvYC6trAT7RQNNK2EG7SIwPWMNlwV0lPZbLXGxGR.ttf",
      "600italic": "https://fonts.gstatic.com/s/karla/v31/qkBKXvYC6trAT7RQNNK2EG7SIwPWMNmcUElPZbLXGxGR.ttf",
      "700italic": "https://fonts.gstatic.com/s/karla/v31/qkBKXvYC6trAT7RQNNK2EG7SIwPWMNmlUElPZbLXGxGR.ttf",
      "800italic": "https://fonts.gstatic.com/s/karla/v31/qkBKXvYC6trAT7RQNNK2EG7SIwPWMNnCUElPZbLXGxGR.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/karla/v31/qkBIXvYC6trAT55ZBi1ueQVIjQTD-JqaFUlP.ttf"
  },
  {
    "family": "Material Icons Outlined",
    "variants": [
      "regular"
    ],
    "subsets": [
      "latin"
    ],
    "version": "v109",
    "lastModified": "2024-08-12",
    "files": {
      "regular": "https://fonts.gstatic.com/s/materialiconsoutlined/v109/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcdl5GuI2Ze.otf"
    },
    "category": "monospace",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/materialiconsoutlined/v109/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhXcanZM.otf"
  },
  {
    "family": "Noto Serif",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v23",
    "lastModified": "2023-10-25",
    "files": {
      "100": "https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZqFGjwM0Lhq_Szw.ttf",
      "200": "https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZKFCjwM0Lhq_Szw.ttf",
      "300": "https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZ9lCjwM0Lhq_Szw.ttf",
      "regular": "https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZqFCjwM0Lhq_Szw.ttf",
      "500": "https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZmlCjwM0Lhq_Szw.ttf",
      "600": "https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZdlejwM0Lhq_Szw.ttf",
      "700": "https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZT1ejwM0Lhq_Szw.ttf",
      "800": "https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZKFejwM0Lhq_Szw.ttf",
      "900": "https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZAVejwM0Lhq_Szw.ttf",
      "100italic": "https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBNLgscPpKrCzyUi.ttf",
      "200italic": "https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBPLg8cPpKrCzyUi.ttf",
      "300italic": "https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBMVg8cPpKrCzyUi.ttf",
      "italic": "https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBNLg8cPpKrCzyUi.ttf",
      "500italic": "https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBN5g8cPpKrCzyUi.ttf",
      "600italic": "https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBOVhMcPpKrCzyUi.ttf",
      "700italic": "https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBOshMcPpKrCzyUi.ttf",
      "800italic": "https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBPLhMcPpKrCzyUi.ttf",
      "900italic": "https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBPihMcPpKrCzyUi.ttf"
    },
    "category": "serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZqFCTwccP.ttf"
  },
  {
    "family": "Outfit",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900"
    ],
    "subsets": [
      "latin",
      "latin-ext"
    ],
    "version": "v11",
    "lastModified": "2024-09-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC0C4G-EiAou6Y.ttf",
      "200": "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4bC1C4G-EiAou6Y.ttf",
      "300": "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4W61C4G-EiAou6Y.ttf",
      "regular": "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1C4G-EiAou6Y.ttf",
      "500": "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4QK1C4G-EiAou6Y.ttf",
      "600": "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4e6yC4G-EiAou6Y.ttf",
      "700": "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4deyC4G-EiAou6Y.ttf",
      "800": "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4bCyC4G-EiAou6Y.ttf",
      "900": "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4ZmyC4G-EiAou6Y.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1O4C0Fg.ttf"
  },
  {
    "family": "Nanum Gothic",
    "variants": [
      "regular",
      "700",
      "800"
    ],
    "subsets": [
      "korean",
      "latin"
    ],
    "version": "v26",
    "lastModified": "2024-11-20",
    "files": {
      "regular": "https://fonts.gstatic.com/s/nanumgothic/v26/PN_3Rfi-oW3hYwmKDpxS7F_z_tLfxno73g.ttf",
      "700": "https://fonts.gstatic.com/s/nanumgothic/v26/PN_oRfi-oW3hYwmKDpxS7F_LQv37zlEn14YEUQ.ttf",
      "800": "https://fonts.gstatic.com/s/nanumgothic/v26/PN_oRfi-oW3hYwmKDpxS7F_LXv77zlEn14YEUQ.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/nanumgothic/v26/PN_3Rfi-oW3hYwmKDpxS7F_D_9jb.ttf"
  },
  {
    "family": "Libre Franklin",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v18",
    "lastModified": "2024-09-30",
    "files": {
      "100": "https://fonts.gstatic.com/s/librefranklin/v18/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhLsSUB9rIb-JH1g.ttf",
      "200": "https://fonts.gstatic.com/s/librefranklin/v18/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhrsWUB9rIb-JH1g.ttf",
      "300": "https://fonts.gstatic.com/s/librefranklin/v18/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhcMWUB9rIb-JH1g.ttf",
      "regular": "https://fonts.gstatic.com/s/librefranklin/v18/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhLsWUB9rIb-JH1g.ttf",
      "500": "https://fonts.gstatic.com/s/librefranklin/v18/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhHMWUB9rIb-JH1g.ttf",
      "600": "https://fonts.gstatic.com/s/librefranklin/v18/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduh8MKUB9rIb-JH1g.ttf",
      "700": "https://fonts.gstatic.com/s/librefranklin/v18/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhycKUB9rIb-JH1g.ttf",
      "800": "https://fonts.gstatic.com/s/librefranklin/v18/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhrsKUB9rIb-JH1g.ttf",
      "900": "https://fonts.gstatic.com/s/librefranklin/v18/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhh8KUB9rIb-JH1g.ttf",
      "100italic": "https://fonts.gstatic.com/s/librefranklin/v18/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05oZ8RdDMTedX1sGE.ttf",
      "200italic": "https://fonts.gstatic.com/s/librefranklin/v18/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05ob8RNDMTedX1sGE.ttf",
      "300italic": "https://fonts.gstatic.com/s/librefranklin/v18/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05oYiRNDMTedX1sGE.ttf",
      "italic": "https://fonts.gstatic.com/s/librefranklin/v18/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05oZ8RNDMTedX1sGE.ttf",
      "500italic": "https://fonts.gstatic.com/s/librefranklin/v18/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05oZORNDMTedX1sGE.ttf",
      "600italic": "https://fonts.gstatic.com/s/librefranklin/v18/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05oaiQ9DMTedX1sGE.ttf",
      "700italic": "https://fonts.gstatic.com/s/librefranklin/v18/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05oabQ9DMTedX1sGE.ttf",
      "800italic": "https://fonts.gstatic.com/s/librefranklin/v18/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05ob8Q9DMTedX1sGE.ttf",
      "900italic": "https://fonts.gstatic.com/s/librefranklin/v18/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05obVQ9DMTedX1sGE.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/librefranklin/v18/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhLsWkBtDM.ttf"
  },
  {
    "family": "Noto Color Emoji",
    "variants": [
      "regular"
    ],
    "subsets": [
      "emoji"
    ],
    "version": "v32",
    "lastModified": "2024-09-03",
    "files": {
      "regular": "https://fonts.gstatic.com/s/notocoloremoji/v32/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFab5s79iz64w.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/notocoloremoji/v32/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFWb9m6w.ttf",
    "colorCapabilities": [
      "COLRv1",
      "SVG"
    ]
  },
  {
    "family": "Schibsted Grotesk",
    "variants": [
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "latin",
      "latin-ext"
    ],
    "version": "v3",
    "lastModified": "2024-09-04",
    "files": {
      "regular": "https://fonts.gstatic.com/s/schibstedgrotesk/v3/JqzK5SSPQuCQF3t8uOwiUL-taUTtarVKQ9vZ6pJJWlMNIsEAT8JuXFGVOQ.ttf",
      "500": "https://fonts.gstatic.com/s/schibstedgrotesk/v3/JqzK5SSPQuCQF3t8uOwiUL-taUTtarVKQ9vZ6pJJWlMNEMEAT8JuXFGVOQ.ttf",
      "600": "https://fonts.gstatic.com/s/schibstedgrotesk/v3/JqzK5SSPQuCQF3t8uOwiUL-taUTtarVKQ9vZ6pJJWlMN_MYAT8JuXFGVOQ.ttf",
      "700": "https://fonts.gstatic.com/s/schibstedgrotesk/v3/JqzK5SSPQuCQF3t8uOwiUL-taUTtarVKQ9vZ6pJJWlMNxcYAT8JuXFGVOQ.ttf",
      "800": "https://fonts.gstatic.com/s/schibstedgrotesk/v3/JqzK5SSPQuCQF3t8uOwiUL-taUTtarVKQ9vZ6pJJWlMNosYAT8JuXFGVOQ.ttf",
      "900": "https://fonts.gstatic.com/s/schibstedgrotesk/v3/JqzK5SSPQuCQF3t8uOwiUL-taUTtarVKQ9vZ6pJJWlMNi8YAT8JuXFGVOQ.ttf",
      "italic": "https://fonts.gstatic.com/s/schibstedgrotesk/v3/JqzI5SSPQuCQF3t8uOwiUL-taUTtap9DcSQBg_nT9FQY6oLoDMhqflSFOTXs.ttf",
      "500italic": "https://fonts.gstatic.com/s/schibstedgrotesk/v3/JqzI5SSPQuCQF3t8uOwiUL-taUTtap9DcSQBg_nT9FQY6oLaDMhqflSFOTXs.ttf",
      "600italic": "https://fonts.gstatic.com/s/schibstedgrotesk/v3/JqzI5SSPQuCQF3t8uOwiUL-taUTtap9DcSQBg_nT9FQY6oI2C8hqflSFOTXs.ttf",
      "700italic": "https://fonts.gstatic.com/s/schibstedgrotesk/v3/JqzI5SSPQuCQF3t8uOwiUL-taUTtap9DcSQBg_nT9FQY6oIPC8hqflSFOTXs.ttf",
      "800italic": "https://fonts.gstatic.com/s/schibstedgrotesk/v3/JqzI5SSPQuCQF3t8uOwiUL-taUTtap9DcSQBg_nT9FQY6oJoC8hqflSFOTXs.ttf",
      "900italic": "https://fonts.gstatic.com/s/schibstedgrotesk/v3/JqzI5SSPQuCQF3t8uOwiUL-taUTtap9DcSQBg_nT9FQY6oJBC8hqflSFOTXs.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/schibstedgrotesk/v3/JqzK5SSPQuCQF3t8uOwiUL-taUTtarVKQ9vZ6pJJWlMNIsEwTshq.ttf"
  },
  {
    "family": "Jost",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "cyrillic",
      "latin",
      "latin-ext"
    ],
    "version": "v18",
    "lastModified": "2024-09-30",
    "files": {
      "100": "https://fonts.gstatic.com/s/jost/v18/92zPtBhPNqw79Ij1E865zBUv7myjJAVGPokMmuHL.ttf",
      "200": "https://fonts.gstatic.com/s/jost/v18/92zPtBhPNqw79Ij1E865zBUv7mwjJQVGPokMmuHL.ttf",
      "300": "https://fonts.gstatic.com/s/jost/v18/92zPtBhPNqw79Ij1E865zBUv7mz9JQVGPokMmuHL.ttf",
      "regular": "https://fonts.gstatic.com/s/jost/v18/92zPtBhPNqw79Ij1E865zBUv7myjJQVGPokMmuHL.ttf",
      "500": "https://fonts.gstatic.com/s/jost/v18/92zPtBhPNqw79Ij1E865zBUv7myRJQVGPokMmuHL.ttf",
      "600": "https://fonts.gstatic.com/s/jost/v18/92zPtBhPNqw79Ij1E865zBUv7mx9IgVGPokMmuHL.ttf",
      "700": "https://fonts.gstatic.com/s/jost/v18/92zPtBhPNqw79Ij1E865zBUv7mxEIgVGPokMmuHL.ttf",
      "800": "https://fonts.gstatic.com/s/jost/v18/92zPtBhPNqw79Ij1E865zBUv7mwjIgVGPokMmuHL.ttf",
      "900": "https://fonts.gstatic.com/s/jost/v18/92zPtBhPNqw79Ij1E865zBUv7mwKIgVGPokMmuHL.ttf",
      "100italic": "https://fonts.gstatic.com/s/jost/v18/92zJtBhPNqw73oHH7BbQp4-B6XlrZu0ENI0un_HLMEo.ttf",
      "200italic": "https://fonts.gstatic.com/s/jost/v18/92zJtBhPNqw73oHH7BbQp4-B6XlrZm0FNI0un_HLMEo.ttf",
      "300italic": "https://fonts.gstatic.com/s/jost/v18/92zJtBhPNqw73oHH7BbQp4-B6XlrZrMFNI0un_HLMEo.ttf",
      "italic": "https://fonts.gstatic.com/s/jost/v18/92zJtBhPNqw73oHH7BbQp4-B6XlrZu0FNI0un_HLMEo.ttf",
      "500italic": "https://fonts.gstatic.com/s/jost/v18/92zJtBhPNqw73oHH7BbQp4-B6XlrZt8FNI0un_HLMEo.ttf",
      "600italic": "https://fonts.gstatic.com/s/jost/v18/92zJtBhPNqw73oHH7BbQp4-B6XlrZjMCNI0un_HLMEo.ttf",
      "700italic": "https://fonts.gstatic.com/s/jost/v18/92zJtBhPNqw73oHH7BbQp4-B6XlrZgoCNI0un_HLMEo.ttf",
      "800italic": "https://fonts.gstatic.com/s/jost/v18/92zJtBhPNqw73oHH7BbQp4-B6XlrZm0CNI0un_HLMEo.ttf",
      "900italic": "https://fonts.gstatic.com/s/jost/v18/92zJtBhPNqw73oHH7BbQp4-B6XlrZkQCNI0un_HLMEo.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/jost/v18/92zPtBhPNqw79Ij1E865zBUv7myjJTVHNI0.ttf"
  },
  {
    "family": "Hind Siliguri",
    "variants": [
      "300",
      "regular",
      "500",
      "600",
      "700"
    ],
    "subsets": [
      "bengali",
      "latin",
      "latin-ext"
    ],
    "version": "v13",
    "lastModified": "2024-12-04",
    "files": {
      "300": "https://fonts.gstatic.com/s/hindsiliguri/v13/ijwOs5juQtsyLLR5jN4cxBEoRDf44uEfKiGvxts.ttf",
      "regular": "https://fonts.gstatic.com/s/hindsiliguri/v13/ijwTs5juQtsyLLR5jN4cxBEofJvQxuk0Nig.ttf",
      "500": "https://fonts.gstatic.com/s/hindsiliguri/v13/ijwOs5juQtsyLLR5jN4cxBEoRG_54uEfKiGvxts.ttf",
      "600": "https://fonts.gstatic.com/s/hindsiliguri/v13/ijwOs5juQtsyLLR5jN4cxBEoREP-4uEfKiGvxts.ttf",
      "700": "https://fonts.gstatic.com/s/hindsiliguri/v13/ijwOs5juQtsyLLR5jN4cxBEoRCf_4uEfKiGvxts.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/hindsiliguri/v13/ijwTs5juQtsyLLR5jN4cxBEoTJrawg.ttf"
  },
  {
    "family": "Inconsolata",
    "variants": [
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900"
    ],
    "subsets": [
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v32",
    "lastModified": "2024-09-04",
    "files": {
      "200": "https://fonts.gstatic.com/s/inconsolata/v32/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7LppwU8aRr8lleY2co.ttf",
      "300": "https://fonts.gstatic.com/s/inconsolata/v32/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp9s8aRr8lleY2co.ttf",
      "regular": "https://fonts.gstatic.com/s/inconsolata/v32/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp4U8aRr8lleY2co.ttf",
      "500": "https://fonts.gstatic.com/s/inconsolata/v32/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp7c8aRr8lleY2co.ttf",
      "600": "https://fonts.gstatic.com/s/inconsolata/v32/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp1s7aRr8lleY2co.ttf",
      "700": "https://fonts.gstatic.com/s/inconsolata/v32/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp2I7aRr8lleY2co.ttf",
      "800": "https://fonts.gstatic.com/s/inconsolata/v32/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7LppwU7aRr8lleY2co.ttf",
      "900": "https://fonts.gstatic.com/s/inconsolata/v32/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lppyw7aRr8lleY2co.ttf"
    },
    "category": "monospace",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/inconsolata/v32/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp4U8WRv2kg.ttf"
  },
  {
    "family": "Josefin Sans",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic"
    ],
    "subsets": [
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v32",
    "lastModified": "2024-09-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/josefinsans/v32/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjRXMFrLgTsQV0.ttf",
      "200": "https://fonts.gstatic.com/s/josefinsans/v32/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_LjQXMFrLgTsQV0.ttf",
      "300": "https://fonts.gstatic.com/s/josefinsans/v32/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_GbQXMFrLgTsQV0.ttf",
      "regular": "https://fonts.gstatic.com/s/josefinsans/v32/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQXMFrLgTsQV0.ttf",
      "500": "https://fonts.gstatic.com/s/josefinsans/v32/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_ArQXMFrLgTsQV0.ttf",
      "600": "https://fonts.gstatic.com/s/josefinsans/v32/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_ObXXMFrLgTsQV0.ttf",
      "700": "https://fonts.gstatic.com/s/josefinsans/v32/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_N_XXMFrLgTsQV0.ttf",
      "100italic": "https://fonts.gstatic.com/s/josefinsans/v32/Qw3JZQNVED7rKGKxtqIqX5EUCGZ2dIn0FyA96fCTtINhKibpUV3MEQ.ttf",
      "200italic": "https://fonts.gstatic.com/s/josefinsans/v32/Qw3JZQNVED7rKGKxtqIqX5EUCGZ2dIn0FyA96fCTNIJhKibpUV3MEQ.ttf",
      "300italic": "https://fonts.gstatic.com/s/josefinsans/v32/Qw3JZQNVED7rKGKxtqIqX5EUCGZ2dIn0FyA96fCT6oJhKibpUV3MEQ.ttf",
      "italic": "https://fonts.gstatic.com/s/josefinsans/v32/Qw3JZQNVED7rKGKxtqIqX5EUCGZ2dIn0FyA96fCTtIJhKibpUV3MEQ.ttf",
      "500italic": "https://fonts.gstatic.com/s/josefinsans/v32/Qw3JZQNVED7rKGKxtqIqX5EUCGZ2dIn0FyA96fCThoJhKibpUV3MEQ.ttf",
      "600italic": "https://fonts.gstatic.com/s/josefinsans/v32/Qw3JZQNVED7rKGKxtqIqX5EUCGZ2dIn0FyA96fCTaoVhKibpUV3MEQ.ttf",
      "700italic": "https://fonts.gstatic.com/s/josefinsans/v32/Qw3JZQNVED7rKGKxtqIqX5EUCGZ2dIn0FyA96fCTU4VhKibpUV3MEQ.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/josefinsans/v32/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMBhKg.ttf"
  },
  {
    "family": "Libre Baskerville",
    "variants": [
      "regular",
      "italic",
      "700"
    ],
    "subsets": [
      "latin",
      "latin-ext"
    ],
    "version": "v14",
    "lastModified": "2024-09-04",
    "files": {
      "regular": "https://fonts.gstatic.com/s/librebaskerville/v14/kmKnZrc3Hgbbcjq75U4uslyuy4kn0pNeYRI4CN2V.ttf",
      "italic": "https://fonts.gstatic.com/s/librebaskerville/v14/kmKhZrc3Hgbbcjq75U4uslyuy4kn0qNcaxYaDc2V2ro.ttf",
      "700": "https://fonts.gstatic.com/s/librebaskerville/v14/kmKiZrc3Hgbbcjq75U4uslyuy4kn0qviTjYwI8Gcw6Oi.ttf"
    },
    "category": "serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/librebaskerville/v14/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNfaxY.ttf"
  },
  {
    "family": "Anton",
    "variants": [
      "regular"
    ],
    "subsets": [
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v25",
    "lastModified": "2024-09-04",
    "files": {
      "regular": "https://fonts.gstatic.com/s/anton/v25/1Ptgg87LROyAm0K08i4gS7lu.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/anton/v25/1Ptgg87LROyAm3K1-Co.ttf"
  },
  {
    "family": "Source Code Pro",
    "variants": [
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v23",
    "lastModified": "2024-09-04",
    "files": {
      "200": "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DEyQhM5hTXUcdJg.ttf",
      "300": "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DJKQhM5hTXUcdJg.ttf",
      "regular": "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DMyQhM5hTXUcdJg.ttf",
      "500": "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DP6QhM5hTXUcdJg.ttf",
      "600": "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DBKXhM5hTXUcdJg.ttf",
      "700": "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DCuXhM5hTXUcdJg.ttf",
      "800": "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DEyXhM5hTXUcdJg.ttf",
      "900": "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DGWXhM5hTXUcdJg.ttf",
      "200italic": "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_jiYsKILxRpg3hIP6sJ7fM7PqlOPHYvDP_W9O7GQTT7I1rSVcZZJiGpw.ttf",
      "300italic": "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_jiYsKILxRpg3hIP6sJ7fM7PqlOPHYvDP_W9O7GQTTMo1rSVcZZJiGpw.ttf",
      "italic": "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_jiYsKILxRpg3hIP6sJ7fM7PqlOPHYvDP_W9O7GQTTbI1rSVcZZJiGpw.ttf",
      "500italic": "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_jiYsKILxRpg3hIP6sJ7fM7PqlOPHYvDP_W9O7GQTTXo1rSVcZZJiGpw.ttf",
      "600italic": "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_jiYsKILxRpg3hIP6sJ7fM7PqlOPHYvDP_W9O7GQTTsoprSVcZZJiGpw.ttf",
      "700italic": "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_jiYsKILxRpg3hIP6sJ7fM7PqlOPHYvDP_W9O7GQTTi4prSVcZZJiGpw.ttf",
      "800italic": "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_jiYsKILxRpg3hIP6sJ7fM7PqlOPHYvDP_W9O7GQTT7IprSVcZZJiGpw.ttf",
      "900italic": "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_jiYsKILxRpg3hIP6sJ7fM7PqlOPHYvDP_W9O7GQTTxYprSVcZZJiGpw.ttf"
    },
    "category": "monospace",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DMyQtM9rSQ.ttf"
  },
  {
    "family": "Dosis",
    "variants": [
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800"
    ],
    "subsets": [
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v32",
    "lastModified": "2024-09-04",
    "files": {
      "200": "https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJt7MV3BkFTq4EPw.ttf",
      "300": "https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJabMV3BkFTq4EPw.ttf",
      "regular": "https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJN7MV3BkFTq4EPw.ttf",
      "500": "https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJBbMV3BkFTq4EPw.ttf",
      "600": "https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJ6bQV3BkFTq4EPw.ttf",
      "700": "https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJ0LQV3BkFTq4EPw.ttf",
      "800": "https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJt7QV3BkFTq4EPw.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJN7Ml3RMB.ttf"
  },
  {
    "family": "Figtree",
    "variants": [
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "latin",
      "latin-ext"
    ],
    "version": "v6",
    "lastModified": "2024-09-30",
    "files": {
      "300": "https://fonts.gstatic.com/s/figtree/v6/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_chQF5ewkEU4HTy.ttf",
      "regular": "https://fonts.gstatic.com/s/figtree/v6/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_d_QF5ewkEU4HTy.ttf",
      "500": "https://fonts.gstatic.com/s/figtree/v6/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_dNQF5ewkEU4HTy.ttf",
      "600": "https://fonts.gstatic.com/s/figtree/v6/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_ehR15ewkEU4HTy.ttf",
      "700": "https://fonts.gstatic.com/s/figtree/v6/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_eYR15ewkEU4HTy.ttf",
      "800": "https://fonts.gstatic.com/s/figtree/v6/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_f_R15ewkEU4HTy.ttf",
      "900": "https://fonts.gstatic.com/s/figtree/v6/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_fWR15ewkEU4HTy.ttf",
      "300italic": "https://fonts.gstatic.com/s/figtree/v6/_Xm9-HUzqDCFdgfMm4GnA4aZFrUvtOK3A-gdyEU25WTybO8.ttf",
      "italic": "https://fonts.gstatic.com/s/figtree/v6/_Xm9-HUzqDCFdgfMm4GnA4aZFrUvtOK3A7YdyEU25WTybO8.ttf",
      "500italic": "https://fonts.gstatic.com/s/figtree/v6/_Xm9-HUzqDCFdgfMm4GnA4aZFrUvtOK3A4QdyEU25WTybO8.ttf",
      "600italic": "https://fonts.gstatic.com/s/figtree/v6/_Xm9-HUzqDCFdgfMm4GnA4aZFrUvtOK3A2gayEU25WTybO8.ttf",
      "700italic": "https://fonts.gstatic.com/s/figtree/v6/_Xm9-HUzqDCFdgfMm4GnA4aZFrUvtOK3A1EayEU25WTybO8.ttf",
      "800italic": "https://fonts.gstatic.com/s/figtree/v6/_Xm9-HUzqDCFdgfMm4GnA4aZFrUvtOK3AzYayEU25WTybO8.ttf",
      "900italic": "https://fonts.gstatic.com/s/figtree/v6/_Xm9-HUzqDCFdgfMm4GnA4aZFrUvtOK3Ax8ayEU25WTybO8.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/figtree/v6/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_d_QG5fyEU.ttf"
  },
  {
    "family": "Prompt",
    "variants": [
      "100",
      "100italic",
      "200",
      "200italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "600",
      "600italic",
      "700",
      "700italic",
      "800",
      "800italic",
      "900",
      "900italic"
    ],
    "subsets": [
      "latin",
      "latin-ext",
      "thai",
      "vietnamese"
    ],
    "version": "v10",
    "lastModified": "2024-09-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/prompt/v10/-W_9XJnvUD7dzB2CA9oYREcjeo0k.ttf",
      "100italic": "https://fonts.gstatic.com/s/prompt/v10/-W_7XJnvUD7dzB2KZeJ8TkMBf50kbiM.ttf",
      "200": "https://fonts.gstatic.com/s/prompt/v10/-W_8XJnvUD7dzB2Cr_s4bmkvc5Q9dw.ttf",
      "200italic": "https://fonts.gstatic.com/s/prompt/v10/-W_6XJnvUD7dzB2KZeLQb2MrUZEtdzow.ttf",
      "300": "https://fonts.gstatic.com/s/prompt/v10/-W_8XJnvUD7dzB2Cy_g4bmkvc5Q9dw.ttf",
      "300italic": "https://fonts.gstatic.com/s/prompt/v10/-W_6XJnvUD7dzB2KZeK0bGMrUZEtdzow.ttf",
      "regular": "https://fonts.gstatic.com/s/prompt/v10/-W__XJnvUD7dzB26Z9AcZkIzeg.ttf",
      "italic": "https://fonts.gstatic.com/s/prompt/v10/-W_9XJnvUD7dzB2KZdoYREcjeo0k.ttf",
      "500": "https://fonts.gstatic.com/s/prompt/v10/-W_8XJnvUD7dzB2Ck_k4bmkvc5Q9dw.ttf",
      "500italic": "https://fonts.gstatic.com/s/prompt/v10/-W_6XJnvUD7dzB2KZeLsbWMrUZEtdzow.ttf",
      "600": "https://fonts.gstatic.com/s/prompt/v10/-W_8XJnvUD7dzB2Cv_44bmkvc5Q9dw.ttf",
      "600italic": "https://fonts.gstatic.com/s/prompt/v10/-W_6XJnvUD7dzB2KZeLAamMrUZEtdzow.ttf",
      "700": "https://fonts.gstatic.com/s/prompt/v10/-W_8XJnvUD7dzB2C2_84bmkvc5Q9dw.ttf",
      "700italic": "https://fonts.gstatic.com/s/prompt/v10/-W_6XJnvUD7dzB2KZeKka2MrUZEtdzow.ttf",
      "800": "https://fonts.gstatic.com/s/prompt/v10/-W_8XJnvUD7dzB2Cx_w4bmkvc5Q9dw.ttf",
      "800italic": "https://fonts.gstatic.com/s/prompt/v10/-W_6XJnvUD7dzB2KZeK4aGMrUZEtdzow.ttf",
      "900": "https://fonts.gstatic.com/s/prompt/v10/-W_8XJnvUD7dzB2C4_04bmkvc5Q9dw.ttf",
      "900italic": "https://fonts.gstatic.com/s/prompt/v10/-W_6XJnvUD7dzB2KZeKcaWMrUZEtdzow.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/prompt/v10/-W__XJnvUD7dzB2KZtoY.ttf"
  },
  {
    "family": "Mukta",
    "variants": [
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800"
    ],
    "subsets": [
      "devanagari",
      "latin",
      "latin-ext"
    ],
    "version": "v16",
    "lastModified": "2024-11-07",
    "files": {
      "200": "https://fonts.gstatic.com/s/mukta/v16/iJWHBXyXfDDVXbEOjFma-2HW7ZB_.ttf",
      "300": "https://fonts.gstatic.com/s/mukta/v16/iJWHBXyXfDDVXbFqj1ma-2HW7ZB_.ttf",
      "regular": "https://fonts.gstatic.com/s/mukta/v16/iJWKBXyXfDDVXYnGp32S0H3f.ttf",
      "500": "https://fonts.gstatic.com/s/mukta/v16/iJWHBXyXfDDVXbEyjlma-2HW7ZB_.ttf",
      "600": "https://fonts.gstatic.com/s/mukta/v16/iJWHBXyXfDDVXbEeiVma-2HW7ZB_.ttf",
      "700": "https://fonts.gstatic.com/s/mukta/v16/iJWHBXyXfDDVXbF6iFma-2HW7ZB_.ttf",
      "800": "https://fonts.gstatic.com/s/mukta/v16/iJWHBXyXfDDVXbFmi1ma-2HW7ZB_.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/mukta/v16/iJWKBXyXfDDVXbnHrXk.ttf"
  },
  {
    "family": "Dancing Script",
    "variants": [
      "regular",
      "500",
      "600",
      "700"
    ],
    "subsets": [
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v25",
    "lastModified": "2024-09-04",
    "files": {
      "regular": "https://fonts.gstatic.com/s/dancingscript/v25/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7BMSoHTeB9ptDqpw.ttf",
      "500": "https://fonts.gstatic.com/s/dancingscript/v25/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7BAyoHTeB9ptDqpw.ttf",
      "600": "https://fonts.gstatic.com/s/dancingscript/v25/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7B7y0HTeB9ptDqpw.ttf",
      "700": "https://fonts.gstatic.com/s/dancingscript/v25/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7B1i0HTeB9ptDqpw.ttf"
    },
    "category": "handwriting",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/dancingscript/v25/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7BMSo3TOp5.ttf"
  },
  {
    "family": "IBM Plex Mono",
    "variants": [
      "100",
      "100italic",
      "200",
      "200italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "600",
      "600italic",
      "700",
      "700italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v19",
    "lastModified": "2024-09-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/ibmplexmono/v19/-F6pfjptAgt5VM-kVkqdyU8n3kwq0n1hj-sNFQ.ttf",
      "100italic": "https://fonts.gstatic.com/s/ibmplexmono/v19/-F6rfjptAgt5VM-kVkqdyU8n1ioStndlre4dFcFh.ttf",
      "200": "https://fonts.gstatic.com/s/ibmplexmono/v19/-F6qfjptAgt5VM-kVkqdyU8n3uAL8ldPg-IUDNg.ttf",
      "200italic": "https://fonts.gstatic.com/s/ibmplexmono/v19/-F6sfjptAgt5VM-kVkqdyU8n1ioSGlZFh8ARHNh4zg.ttf",
      "300": "https://fonts.gstatic.com/s/ibmplexmono/v19/-F6qfjptAgt5VM-kVkqdyU8n3oQI8ldPg-IUDNg.ttf",
      "300italic": "https://fonts.gstatic.com/s/ibmplexmono/v19/-F6sfjptAgt5VM-kVkqdyU8n1ioSflVFh8ARHNh4zg.ttf",
      "regular": "https://fonts.gstatic.com/s/ibmplexmono/v19/-F63fjptAgt5VM-kVkqdyU8n5igg1l9kn-s.ttf",
      "italic": "https://fonts.gstatic.com/s/ibmplexmono/v19/-F6pfjptAgt5VM-kVkqdyU8n1ioq0n1hj-sNFQ.ttf",
      "500": "https://fonts.gstatic.com/s/ibmplexmono/v19/-F6qfjptAgt5VM-kVkqdyU8n3twJ8ldPg-IUDNg.ttf",
      "500italic": "https://fonts.gstatic.com/s/ibmplexmono/v19/-F6sfjptAgt5VM-kVkqdyU8n1ioSJlRFh8ARHNh4zg.ttf",
      "600": "https://fonts.gstatic.com/s/ibmplexmono/v19/-F6qfjptAgt5VM-kVkqdyU8n3vAO8ldPg-IUDNg.ttf",
      "600italic": "https://fonts.gstatic.com/s/ibmplexmono/v19/-F6sfjptAgt5VM-kVkqdyU8n1ioSClNFh8ARHNh4zg.ttf",
      "700": "https://fonts.gstatic.com/s/ibmplexmono/v19/-F6qfjptAgt5VM-kVkqdyU8n3pQP8ldPg-IUDNg.ttf",
      "700italic": "https://fonts.gstatic.com/s/ibmplexmono/v19/-F6sfjptAgt5VM-kVkqdyU8n1ioSblJFh8ARHNh4zg.ttf"
    },
    "category": "monospace",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/ibmplexmono/v19/-F63fjptAgt5VM-kVkqdyU8n1ikq0g.ttf"
  },
  {
    "family": "Noto Serif JP",
    "variants": [
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900"
    ],
    "subsets": [
      "cyrillic",
      "japanese",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v30",
    "lastModified": "2024-09-23",
    "files": {
      "200": "https://fonts.gstatic.com/s/notoserifjp/v30/xn71YHs72GKoTvER4Gn3b5eMRtWGkp6o7MjQ2byxOubAILO5wBCU.ttf",
      "300": "https://fonts.gstatic.com/s/notoserifjp/v30/xn71YHs72GKoTvER4Gn3b5eMRtWGkp6o7MjQ2bxvOubAILO5wBCU.ttf",
      "regular": "https://fonts.gstatic.com/s/notoserifjp/v30/xn71YHs72GKoTvER4Gn3b5eMRtWGkp6o7MjQ2bwxOubAILO5wBCU.ttf",
      "500": "https://fonts.gstatic.com/s/notoserifjp/v30/xn71YHs72GKoTvER4Gn3b5eMRtWGkp6o7MjQ2bwDOubAILO5wBCU.ttf",
      "600": "https://fonts.gstatic.com/s/notoserifjp/v30/xn71YHs72GKoTvER4Gn3b5eMRtWGkp6o7MjQ2bzvPebAILO5wBCU.ttf",
      "700": "https://fonts.gstatic.com/s/notoserifjp/v30/xn71YHs72GKoTvER4Gn3b5eMRtWGkp6o7MjQ2bzWPebAILO5wBCU.ttf",
      "800": "https://fonts.gstatic.com/s/notoserifjp/v30/xn71YHs72GKoTvER4Gn3b5eMRtWGkp6o7MjQ2byxPebAILO5wBCU.ttf",
      "900": "https://fonts.gstatic.com/s/notoserifjp/v30/xn71YHs72GKoTvER4Gn3b5eMRtWGkp6o7MjQ2byYPebAILO5wBCU.ttf"
    },
    "category": "serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/notoserifjp/v30/xn71YHs72GKoTvER4Gn3b5eMRtWGkp6o7MjQ2bwxOtbBKrc.ttf"
  },
  {
    "family": "Space Grotesk",
    "variants": [
      "300",
      "regular",
      "500",
      "600",
      "700"
    ],
    "subsets": [
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v16",
    "lastModified": "2024-09-04",
    "files": {
      "300": "https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj62UUsjNsFjTDJK.ttf",
      "regular": "https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUUsjNsFjTDJK.ttf",
      "500": "https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7aUUsjNsFjTDJK.ttf",
      "600": "https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj42VksjNsFjTDJK.ttf",
      "700": "https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj4PVksjNsFjTDJK.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUXsiPMU.ttf"
  },
  {
    "family": "Source Sans 3",
    "variants": [
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v15",
    "lastModified": "2024-09-04",
    "files": {
      "200": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpBtKy2OAdR1K-IwhWudF-R9QMylBJAV3Bo8Kw461EN_io6npfB.ttf",
      "300": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpBtKy2OAdR1K-IwhWudF-R9QMylBJAV3Bo8Kzm61EN_io6npfB.ttf",
      "regular": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpBtKy2OAdR1K-IwhWudF-R9QMylBJAV3Bo8Ky461EN_io6npfB.ttf",
      "500": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpBtKy2OAdR1K-IwhWudF-R9QMylBJAV3Bo8KyK61EN_io6npfB.ttf",
      "600": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpBtKy2OAdR1K-IwhWudF-R9QMylBJAV3Bo8Kxm7FEN_io6npfB.ttf",
      "700": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpBtKy2OAdR1K-IwhWudF-R9QMylBJAV3Bo8Kxf7FEN_io6npfB.ttf",
      "800": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpBtKy2OAdR1K-IwhWudF-R9QMylBJAV3Bo8Kw47FEN_io6npfB.ttf",
      "900": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpBtKy2OAdR1K-IwhWudF-R9QMylBJAV3Bo8KwR7FEN_io6npfB.ttf",
      "200italic": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpDtKy2OAdR1K-IwhWudF-R3woAa8opPOrG97lwqDlO9C4Ym4fB3Ts.ttf",
      "300italic": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpDtKy2OAdR1K-IwhWudF-R3woAa8opPOrG97lwqOdO9C4Ym4fB3Ts.ttf",
      "italic": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpDtKy2OAdR1K-IwhWudF-R3woAa8opPOrG97lwqLlO9C4Ym4fB3Ts.ttf",
      "500italic": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpDtKy2OAdR1K-IwhWudF-R3woAa8opPOrG97lwqItO9C4Ym4fB3Ts.ttf",
      "600italic": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpDtKy2OAdR1K-IwhWudF-R3woAa8opPOrG97lwqGdJ9C4Ym4fB3Ts.ttf",
      "700italic": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpDtKy2OAdR1K-IwhWudF-R3woAa8opPOrG97lwqF5J9C4Ym4fB3Ts.ttf",
      "800italic": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpDtKy2OAdR1K-IwhWudF-R3woAa8opPOrG97lwqDlJ9C4Ym4fB3Ts.ttf",
      "900italic": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpDtKy2OAdR1K-IwhWudF-R3woAa8opPOrG97lwqBBJ9C4Ym4fB3Ts.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpBtKy2OAdR1K-IwhWudF-R9QMylBJAV3Bo8Ky462EM9C4.ttf"
  },
  {
    "family": "Noto Sans SC",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900"
    ],
    "subsets": [
      "chinese-simplified",
      "cyrillic",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v37",
    "lastModified": "2024-07-30",
    "files": {
      "100": "https://fonts.gstatic.com/s/notosanssc/v37/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG9_EnYxNbPzS5HE.ttf",
      "200": "https://fonts.gstatic.com/s/notosanssc/v37/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG1_FnYxNbPzS5HE.ttf",
      "300": "https://fonts.gstatic.com/s/notosanssc/v37/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG4HFnYxNbPzS5HE.ttf",
      "regular": "https://fonts.gstatic.com/s/notosanssc/v37/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG9_FnYxNbPzS5HE.ttf",
      "500": "https://fonts.gstatic.com/s/notosanssc/v37/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG-3FnYxNbPzS5HE.ttf",
      "600": "https://fonts.gstatic.com/s/notosanssc/v37/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaGwHCnYxNbPzS5HE.ttf",
      "700": "https://fonts.gstatic.com/s/notosanssc/v37/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaGzjCnYxNbPzS5HE.ttf",
      "800": "https://fonts.gstatic.com/s/notosanssc/v37/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG1_CnYxNbPzS5HE.ttf",
      "900": "https://fonts.gstatic.com/s/notosanssc/v37/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG3bCnYxNbPzS5HE.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/notosanssc/v37/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG9_FrY1HaA.ttf"
  },
  {
    "family": "Teko",
    "variants": [
      "300",
      "regular",
      "500",
      "600",
      "700"
    ],
    "subsets": [
      "devanagari",
      "latin",
      "latin-ext"
    ],
    "version": "v20",
    "lastModified": "2024-09-04",
    "files": {
      "300": "https://fonts.gstatic.com/s/teko/v20/LYjYdG7kmE0gV69VVPPdFl06VN9JG7Sy3TKEvkCF.ttf",
      "regular": "https://fonts.gstatic.com/s/teko/v20/LYjYdG7kmE0gV69VVPPdFl06VN8XG7Sy3TKEvkCF.ttf",
      "500": "https://fonts.gstatic.com/s/teko/v20/LYjYdG7kmE0gV69VVPPdFl06VN8lG7Sy3TKEvkCF.ttf",
      "600": "https://fonts.gstatic.com/s/teko/v20/LYjYdG7kmE0gV69VVPPdFl06VN_JHLSy3TKEvkCF.ttf",
      "700": "https://fonts.gstatic.com/s/teko/v20/LYjYdG7kmE0gV69VVPPdFl06VN_wHLSy3TKEvkCF.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/teko/v20/LYjYdG7kmE0gV69VVPPdFl06VN8XG4Sz1zY.ttf"
  },
  {
    "family": "Arimo",
    "variants": [
      "regular",
      "500",
      "600",
      "700",
      "italic",
      "500italic",
      "600italic",
      "700italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "hebrew",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v29",
    "lastModified": "2024-09-04",
    "files": {
      "regular": "https://fonts.gstatic.com/s/arimo/v29/P5sfzZCDf9_T_3cV7NCUECyoxNk37cxsBxDAVQI4aA.ttf",
      "500": "https://fonts.gstatic.com/s/arimo/v29/P5sfzZCDf9_T_3cV7NCUECyoxNk338xsBxDAVQI4aA.ttf",
      "600": "https://fonts.gstatic.com/s/arimo/v29/P5sfzZCDf9_T_3cV7NCUECyoxNk3M8tsBxDAVQI4aA.ttf",
      "700": "https://fonts.gstatic.com/s/arimo/v29/P5sfzZCDf9_T_3cV7NCUECyoxNk3CstsBxDAVQI4aA.ttf",
      "italic": "https://fonts.gstatic.com/s/arimo/v29/P5sdzZCDf9_T_10c3i9MeUcyat4iJY-ERBrEdwcoaKww.ttf",
      "500italic": "https://fonts.gstatic.com/s/arimo/v29/P5sdzZCDf9_T_10c3i9MeUcyat4iJY-2RBrEdwcoaKww.ttf",
      "600italic": "https://fonts.gstatic.com/s/arimo/v29/P5sdzZCDf9_T_10c3i9MeUcyat4iJY9aQxrEdwcoaKww.ttf",
      "700italic": "https://fonts.gstatic.com/s/arimo/v29/P5sdzZCDf9_T_10c3i9MeUcyat4iJY9jQxrEdwcoaKww.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/arimo/v29/P5sfzZCDf9_T_3cV7NCUECyoxNk37cxcBhrE.ttf"
  },
  {
    "family": "Archivo",
    "variants": [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic"
    ],
    "subsets": [
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v19",
    "lastModified": "2024-09-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/archivo/v19/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTNDJp8B1oJ0vyVQ.ttf",
      "200": "https://fonts.gstatic.com/s/archivo/v19/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTtDNp8B1oJ0vyVQ.ttf",
      "300": "https://fonts.gstatic.com/s/archivo/v19/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTajNp8B1oJ0vyVQ.ttf",
      "regular": "https://fonts.gstatic.com/s/archivo/v19/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTNDNp8B1oJ0vyVQ.ttf",
      "500": "https://fonts.gstatic.com/s/archivo/v19/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTBjNp8B1oJ0vyVQ.ttf",
      "600": "https://fonts.gstatic.com/s/archivo/v19/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTT6jRp8B1oJ0vyVQ.ttf",
      "700": "https://fonts.gstatic.com/s/archivo/v19/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTT0zRp8B1oJ0vyVQ.ttf",
      "800": "https://fonts.gstatic.com/s/archivo/v19/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTtDRp8B1oJ0vyVQ.ttf",
      "900": "https://fonts.gstatic.com/s/archivo/v19/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTnTRp8B1oJ0vyVQ.ttf",
      "100italic": "https://fonts.gstatic.com/s/archivo/v19/k3k8o8UDI-1M0wlSfdzyIEkpwTM29hr-8mTYIRyOSVz60_PG_HCBshdsBU7iVdxQ.ttf",
      "200italic": "https://fonts.gstatic.com/s/archivo/v19/k3k8o8UDI-1M0wlSfdzyIEkpwTM29hr-8mTYIRyOSVz60_PG_HABsxdsBU7iVdxQ.ttf",
      "300italic": "https://fonts.gstatic.com/s/archivo/v19/k3k8o8UDI-1M0wlSfdzyIEkpwTM29hr-8mTYIRyOSVz60_PG_HDfsxdsBU7iVdxQ.ttf",
      "italic": "https://fonts.gstatic.com/s/archivo/v19/k3k8o8UDI-1M0wlSfdzyIEkpwTM29hr-8mTYIRyOSVz60_PG_HCBsxdsBU7iVdxQ.ttf",
      "500italic": "https://fonts.gstatic.com/s/archivo/v19/k3k8o8UDI-1M0wlSfdzyIEkpwTM29hr-8mTYIRyOSVz60_PG_HCzsxdsBU7iVdxQ.ttf",
      "600italic": "https://fonts.gstatic.com/s/archivo/v19/k3k8o8UDI-1M0wlSfdzyIEkpwTM29hr-8mTYIRyOSVz60_PG_HBftBdsBU7iVdxQ.ttf",
      "700italic": "https://fonts.gstatic.com/s/archivo/v19/k3k8o8UDI-1M0wlSfdzyIEkpwTM29hr-8mTYIRyOSVz60_PG_HBmtBdsBU7iVdxQ.ttf",
      "800italic": "https://fonts.gstatic.com/s/archivo/v19/k3k8o8UDI-1M0wlSfdzyIEkpwTM29hr-8mTYIRyOSVz60_PG_HABtBdsBU7iVdxQ.ttf",
      "900italic": "https://fonts.gstatic.com/s/archivo/v19/k3k8o8UDI-1M0wlSfdzyIEkpwTM29hr-8mTYIRyOSVz60_PG_HAotBdsBU7iVdxQ.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/archivo/v19/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTNDNZ8Rds.ttf"
  },
  {
    "family": "Cabin",
    "variants": [
      "regular",
      "500",
      "600",
      "700",
      "italic",
      "500italic",
      "600italic",
      "700italic"
    ],
    "subsets": [
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v27",
    "lastModified": "2024-09-04",
    "files": {
      "regular": "https://fonts.gstatic.com/s/cabin/v27/u-4X0qWljRw-PfU81xCKCpdpbgZJl6XFpfEd7eA9BIxxkV2EL7Gvxm7rE_s.ttf",
      "500": "https://fonts.gstatic.com/s/cabin/v27/u-4X0qWljRw-PfU81xCKCpdpbgZJl6XFpfEd7eA9BIxxkW-EL7Gvxm7rE_s.ttf",
      "600": "https://fonts.gstatic.com/s/cabin/v27/u-4X0qWljRw-PfU81xCKCpdpbgZJl6XFpfEd7eA9BIxxkYODL7Gvxm7rE_s.ttf",
      "700": "https://fonts.gstatic.com/s/cabin/v27/u-4X0qWljRw-PfU81xCKCpdpbgZJl6XFpfEd7eA9BIxxkbqDL7Gvxm7rE_s.ttf",
      "italic": "https://fonts.gstatic.com/s/cabin/v27/u-4V0qWljRw-Pd815fNqc8T_wAFcX-c37MPiNYlWniJ2hJXHx_KlwkzuA_u1Bg.ttf",
      "500italic": "https://fonts.gstatic.com/s/cabin/v27/u-4V0qWljRw-Pd815fNqc8T_wAFcX-c37MPiNYlWniJ2hJXH9fKlwkzuA_u1Bg.ttf",
      "600italic": "https://fonts.gstatic.com/s/cabin/v27/u-4V0qWljRw-Pd815fNqc8T_wAFcX-c37MPiNYlWniJ2hJXHGfWlwkzuA_u1Bg.ttf",
      "700italic": "https://fonts.gstatic.com/s/cabin/v27/u-4V0qWljRw-Pd815fNqc8T_wAFcX-c37MPiNYlWniJ2hJXHIPWlwkzuA_u1Bg.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/cabin/v27/u-4X0qWljRw-PfU81xCKCpdpbgZJl6XFpfEd7eA9BIxxkV2EH7Clwg.ttf"
  },
  {
    "family": "EB Garamond",
    "variants": [
      "regular",
      "500",
      "600",
      "700",
      "800",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic"
    ],
    "subsets": [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v30",
    "lastModified": "2024-09-30",
    "files": {
      "regular": "https://fonts.gstatic.com/s/ebgaramond/v30/SlGDmQSNjdsmc35JDF1K5E55YMjF_7DPuGi-6_RUA4V-e6yHgQ.ttf",
      "500": "https://fonts.gstatic.com/s/ebgaramond/v30/SlGDmQSNjdsmc35JDF1K5E55YMjF_7DPuGi-2fRUA4V-e6yHgQ.ttf",
      "600": "https://fonts.gstatic.com/s/ebgaramond/v30/SlGDmQSNjdsmc35JDF1K5E55YMjF_7DPuGi-NfNUA4V-e6yHgQ.ttf",
      "700": "https://fonts.gstatic.com/s/ebgaramond/v30/SlGDmQSNjdsmc35JDF1K5E55YMjF_7DPuGi-DPNUA4V-e6yHgQ.ttf",
      "800": "https://fonts.gstatic.com/s/ebgaramond/v30/SlGDmQSNjdsmc35JDF1K5E55YMjF_7DPuGi-a_NUA4V-e6yHgQ.ttf",
      "italic": "https://fonts.gstatic.com/s/ebgaramond/v30/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7e8QI96WamXgXFI.ttf",
      "500italic": "https://fonts.gstatic.com/s/ebgaramond/v30/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7eOQI96WamXgXFI.ttf",
      "600italic": "https://fonts.gstatic.com/s/ebgaramond/v30/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7diR496WamXgXFI.ttf",
      "700italic": "https://fonts.gstatic.com/s/ebgaramond/v30/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7dbR496WamXgXFI.ttf",
      "800italic": "https://fonts.gstatic.com/s/ebgaramond/v30/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7c8R496WamXgXFI.ttf"
    },
    "category": "serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/ebgaramond/v30/SlGDmQSNjdsmc35JDF1K5E55YMjF_7DPuGi-6_RkAo96.ttf"
  },
  {
    "family": "Barlow Condensed",
    "variants": [
      "100",
      "100italic",
      "200",
      "200italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "600",
      "600italic",
      "700",
      "700italic",
      "800",
      "800italic",
      "900",
      "900italic"
    ],
    "subsets": [
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "version": "v12",
    "lastModified": "2024-09-04",
    "files": {
      "100": "https://fonts.gstatic.com/s/barlowcondensed/v12/HTxxL3I-JCGChYJ8VI-L6OO_au7B43LT31vytKgbaw.ttf",
      "100italic": "https://fonts.gstatic.com/s/barlowcondensed/v12/HTxzL3I-JCGChYJ8VI-L6OO_au7B6xTru1H2lq0La6JN.ttf",
      "200": "https://fonts.gstatic.com/s/barlowcondensed/v12/HTxwL3I-JCGChYJ8VI-L6OO_au7B497y_3HcuKECcrs.ttf",
      "200italic": "https://fonts.gstatic.com/s/barlowcondensed/v12/HTxyL3I-JCGChYJ8VI-L6OO_au7B6xTrF3DWvIMHYrtUxg.ttf",
      "300": "https://fonts.gstatic.com/s/barlowcondensed/v12/HTxwL3I-JCGChYJ8VI-L6OO_au7B47rx_3HcuKECcrs.ttf",
      "300italic": "https://fonts.gstatic.com/s/barlowcondensed/v12/HTxyL3I-JCGChYJ8VI-L6OO_au7B6xTrc3PWvIMHYrtUxg.ttf",
      "regular": "https://fonts.gstatic.com/s/barlowcondensed/v12/HTx3L3I-JCGChYJ8VI-L6OO_au7B2xbZ23n3pKg.ttf",
      "italic": "https://fonts.gstatic.com/s/barlowcondensed/v12/HTxxL3I-JCGChYJ8VI-L6OO_au7B6xTT31vytKgbaw.ttf",
      "500": "https://fonts.gstatic.com/s/barlowcondensed/v12/HTxwL3I-JCGChYJ8VI-L6OO_au7B4-Lw_3HcuKECcrs.ttf",
      "500italic": "https://fonts.gstatic.com/s/barlowcondensed/v12/HTxyL3I-JCGChYJ8VI-L6OO_au7B6xTrK3LWvIMHYrtUxg.ttf",
      "600": "https://fonts.gstatic.com/s/barlowcondensed/v12/HTxwL3I-JCGChYJ8VI-L6OO_au7B4873_3HcuKECcrs.ttf",
      "600italic": "https://fonts.gstatic.com/s/barlowcondensed/v12/HTxyL3I-JCGChYJ8VI-L6OO_au7B6xTrB3XWvIMHYrtUxg.ttf",
      "700": "https://fonts.gstatic.com/s/barlowcondensed/v12/HTxwL3I-JCGChYJ8VI-L6OO_au7B46r2_3HcuKECcrs.ttf",
      "700italic": "https://fonts.gstatic.com/s/barlowcondensed/v12/HTxyL3I-JCGChYJ8VI-L6OO_au7B6xTrY3TWvIMHYrtUxg.ttf",
      "800": "https://fonts.gstatic.com/s/barlowcondensed/v12/HTxwL3I-JCGChYJ8VI-L6OO_au7B47b1_3HcuKECcrs.ttf",
      "800italic": "https://fonts.gstatic.com/s/barlowcondensed/v12/HTxyL3I-JCGChYJ8VI-L6OO_au7B6xTrf3fWvIMHYrtUxg.ttf",
      "900": "https://fonts.gstatic.com/s/barlowcondensed/v12/HTxwL3I-JCGChYJ8VI-L6OO_au7B45L0_3HcuKECcrs.ttf",
      "900italic": "https://fonts.gstatic.com/s/barlowcondensed/v12/HTxyL3I-JCGChYJ8VI-L6OO_au7B6xTrW3bWvIMHYrtUxg.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/barlowcondensed/v12/HTx3L3I-JCGChYJ8VI-L6OO_au7B6xfT3w.ttf"
  },
  {
    "family": "Cairo",
    "variants": [
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "version": "v28",
    "lastModified": "2024-09-04",
    "files": {
      "200": "https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hGA-W1ToLQ-HmkA.ttf",
      "300": "https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hL4-W1ToLQ-HmkA.ttf",
      "regular": "https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hOA-W1ToLQ-HmkA.ttf",
      "500": "https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hNI-W1ToLQ-HmkA.ttf",
      "600": "https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hD45W1ToLQ-HmkA.ttf",
      "700": "https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hAc5W1ToLQ-HmkA.ttf",
      "800": "https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hGA5W1ToLQ-HmkA.ttf",
      "900": "https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hEk5W1ToLQ-HmkA.ttf"
    },
    "category": "sans-serif",
    "kind": "webfonts#webfont",
    "menu": "https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hOA-a1XiKQ.ttf"
  }
]);

export {
    GOOGLE_FONTS_LIST
};
