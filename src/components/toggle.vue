<script setup>
defineProps({
  checked: Boolean
})
</script>

<template>
  <div class="wrapSwitch">
    <label class="switch">
      <input type="checkbox" :checked="checked">
      <div>
        <div class="span"></div>
      </div>
    </label>
  </div>
</template>

<style lang="scss">
.wrapSwitch {
  height: 1em;
  //background: blue;
}

.switch {
    --line: var(--shade);
    --dot: var(--flavor);
    --circle: var(--foreground);
    --duration: .3s;
    --text: #9EA0BE;
    --capRadius: 50%;

    cursor: pointer;
    input {
        display: none;
        & + div {
            position: relative;
            &:before,
            &:after {
                --s: 1;
                content: '';
                position: absolute;
                height: 4px;
                top: 10px;
                width: 24px;
                background: var(--line);
                transform: scaleX(var(--s));
                transition: transform var(--duration) ease;
            }
            &:before {
                --s: 0;
                left: 0;
                transform-origin: 0 50%;
                border-radius: 2px 0 0 2px;
            }
            &:after {
                left: 28px;
                transform-origin: 100% 50%;
                border-radius: 0 2px 2px 0;
            }
            .span {
                padding-left: 56px;
                line-height: 24px;
                color: var(--text);
                &:before {
                    --x: 0;
                    --b: var(--circle);
                    --s: 4px;
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 24px;
                    height: 24px;
                    border-radius: var(--capRadius);
                    box-shadow: inset 0 0 0 var(--s) var(--b); 
                    transform: translateX(var(--x));
                    transition: box-shadow var(--duration) ease, transform var(--duration) ease;
                }
                &:not(:empty) {
                    padding-left: 64px;
                }
            }
        }
        &:checked {
            & + div {
                &:before {
                    --s: 1;
                }
                &:after {
                    --s: 0;
                }
                .span {
                    &:before {
                        --x: 28px;
                        --s: 12px;
                        --b: var(--dot);
                    }
                }
            }
        }
    }
}
</style>