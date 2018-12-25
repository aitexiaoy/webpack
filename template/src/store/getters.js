export default {
    //关于面包屑导航
    breadListState() {
        return JSON.parse(sessionStorage.getItem('breadListStorage')) || [];
    }
}
