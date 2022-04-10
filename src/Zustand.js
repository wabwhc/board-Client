import create from 'zustand';

const useStore = create((set) => ({
    article: [],
    loadArticle(a){
        set(() => ({article: a}))
    }
}))

export default useStore;