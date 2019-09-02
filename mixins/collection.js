export default {
    data: () => ({
        items: [],
        keyword: '',
        current_page: 1,
        last_page: 1,

        //show
        item: [],
        item_show: false,
        sort_by: null,
    }),
    methods: {
        search() {
            this.items = [];
            this.current_page = 1;
            this.$nextTick(() => {
                this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
            });
        },     
        sortSelected(sortBy){
            this.sort_by = sortBy
            this.refrshItems()
        },
        refrshItems(){
            this.items = [];
            this.current_page = 1;
            this.$nextTick(() => {
                this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
            })
        }
    }
}