<template>
<div>
    <section>
        <BreadCrumb/>
        <div class="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
            <BlogSideBar/>
            <div class="lg:col-span-3">
                <BlogDetailsMain/>
            </div>
        </div>
    </section>

</div>
</template>
<script setup>
import BlogDetailsMain from '@/components/blog/BlogDetailsMain.vue';
import BlogSideBar from '@/components/blog/BlogSideBar.vue';
import BreadCrumb from '@/components/commonTemps/BreadCrumb.vue';


</script>
