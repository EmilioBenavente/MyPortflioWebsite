<template>
  <div class='CenterClass'>
    <LeftGutter class='Sides'/>
    <slot></slot>
    <RightGutter class='Sides'/>
  </div>
</template>

<script>
  import LeftGutter from './LeftGutter'
  import RightGutter from './RightGutter'  
  export default {
    name: 'Center',
    components: {
      LeftGutter,
      RightGutter
    }
}
</script>

<style>
  .CenterClass{
    display: flex;
    position: relative;
    top: 20px;
    width: 100%;
    min-height: 1200px;
  }
@media screen and (max-device-width: 599px) {
  .Sides{
      display: none;
  }
}
</style>
