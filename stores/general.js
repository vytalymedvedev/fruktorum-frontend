export const useGeneralStore = defineStore('general', () => {
  const blocks = ref([]);
  const meta = ref({ title: '', description: '', slug: '' });

  const setBlocks = (newValue) => blocks.value = newValue;
  const setMeta = (newValue) => meta.value = newValue;


  const getPageData = async (path) => {
    try {
      const { data: responseData } = await useFetch(`https://devtwit8.ru/api/v1/page/?path=${path}`, { method: 'get' });
      setBlocks(responseData.value.body);
      setMeta(responseData.value.meta);
    } catch (error) {
      console.log(error);
    }
  }

  return { getPageData, blocks, meta }
})