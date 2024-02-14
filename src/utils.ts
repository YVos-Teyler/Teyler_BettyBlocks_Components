import { 
  PrefabComponentOption,
  OptionProducer,
  showIfTrue,
} from '@betty-blocks/component-sdk';

export const showOn = (key: string) => ({
  configuration: { condition: showIfTrue(key) },
});

export const updateOption = <T extends PrefabComponentOption>(
  producer: (key: string) => T,
  attrs: Partial<T>,
): OptionProducer => {
  return (key) => {
    return { ...producer(key), ...attrs };
  };
};