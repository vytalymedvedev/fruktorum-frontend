export const useGeneralStore = defineStore('general', () => {
  const blocks = ref([]);

  const setBlocks = (newValue) => blocks.value = newValue;

  const getData = async (path) => {
    try {
      const { data: responseData } = await useFetch(`https://devtwit8.ru/api/v1/page/?path=${path}`, { method: 'get' });
      setBlocks(responseData.value.body);
    } catch (error) {
      console.log(error);
    }
  }

  return { getData, blocks }
})