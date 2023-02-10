<template>
    <nav>
        <ul>
            <li>
                <RouterLink to="/">{{$t("nav.home")}}</RouterLink>
            </li>

            <li>
                <RouterLink to="/about">{{$t("nav.about")}}</RouterLink>
            </li>
        </ul>
    </nav>
    <LanguageSwitcher></LanguageSwitcher>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue';
export default {
    components: {
        LanguageSwitcher
    }
}
</script>