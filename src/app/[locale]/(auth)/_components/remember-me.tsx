import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";

interface RememberMeProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export default function RememberMe({ value, onChange }: RememberMeProps) {
  return (
    <Field className="pt-5" orientation="horizontal">
      <Checkbox checked={value} onCheckedChange={(v) => onChange(!!v)} />
      <FieldLabel>Remember me</FieldLabel>
    </Field>
  );
}
