import Vue from 'vue'

Vue.mixin({
	methods: {
		str_limit(text, count){
			if(text != null)
		    	return text.slice(0, count) + (text.length > count ? " ..." : "");
		    else
		    	return 'N/A'
		},
		is_image_url(url) {
		    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
		},		
		is_video_url(url) {
		    return(url.match(/\.(mp4)$/) != null);
		},
		fromNow(timestamp) {
            return this.$moment.unix(timestamp).fromNow();
        },
        dateFormat(timestamp) {
            return this.$moment.unix(timestamp).utcOffset(120).format("YYYY-M-D, h:mm a");
        },
        groupBy(xs, key){
			return xs.reduce(function(rv, x) {
				(rv[x[key]] = rv[x[key]] || []).push(x);
			return rv;
			}, {});
        },
        uniqueBy(arr, comp) {
		  const unique = arr
		       .map(e => e[comp])
		     // store the keys of the unique objects
		    .map((e, i, final) => final.indexOf(e) === i && i)
		    // eliminate the dead keys & store unique objects
		    .filter(e => arr[e]).map(e => arr[e]);
		   return unique;
        }
	}
})