import { create } from "zustand";

export const useStore = create((set) => ({
  countries: [],
  loading: false,
  error: null,
  currentPage: 1,
  itemsPerPage: 12,
  
  fetchCountries: async () => {
    set({ loading: true, error: null });
    try {
        const response = await fetch(`https://restcountries.com/v3.1/all?fields=name,flags,capital`);
        if (!response.ok) throw new Error('Error fetching data');

        const data = await response.json();
        set({ countries: data, loading: false });

        console.log(data);
        return data;
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  setCurrentPage: (page) => set({ currentPage: page }),
}));

// banderas, nombre, capital














/* [
    {
        "flags": {
            "png": "https://flagcdn.com/w320/ag.png",
            "svg": "https://flagcdn.com/ag.svg",
            "alt": "The flag of Antigua and Barbuda has a red field with an inverted isosceles triangle based on the top edge and spanning the height of the field. This triangle has three horizontal bands of black, light blue and white, with the light blue band half the height of the two other bands. The top half of a golden-yellow sun is situated in the lower two-third of the black band to depict a rising sun."
        },
        "name": {
            "common": "Antigua and Barbuda",
            "official": "Antigua and Barbuda",
            "nativeName": {
                "eng": {
                    "official": "Antigua and Barbuda",
                    "common": "Antigua and Barbuda"
                }
            }
        }
    },
    {
        "flags": {
            "png": "https://flagcdn.com/w320/bt.png",
            "svg": "https://flagcdn.com/bt.svg",
            "alt": "The flag of Bhutan is divided diagonally, from the lower hoist-side corner to the upper fly-side corner, into an upper yellow and a lower orange triangle. A fly-side facing white dragon holding four jewels in its claws is situated along the boundary of the two triangles."
        },  
        "name": {
            "common": "Bhutan",
            "official": "Kingdom of Bhutan",
            "nativeName": {
                "dzo": {
                    "official": "འབྲུག་རྒྱལ་ཁབ་",
                    "common": "འབྲུག་ཡུལ་"
                }
            }
        }
    }, */
