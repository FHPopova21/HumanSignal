import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from '@/components/ui/slider';
import { ArrowLeft } from 'lucide-react';

interface AssessmentFormProps {
  onSubmit: (data: any) => void;
}

export function AssessmentForm({ onSubmit }: AssessmentFormProps) {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch } = useForm();
  const caspScore = watch("casp", 19); // Default middle value

  const onFormSubmit = (data: any) => {
    console.log("Assessment Data:", data);
    onSubmit(data);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 animate-in slide-in-from-bottom-4 duration-500 pb-20">
      <Button 
        variant="ghost" 
        onClick={() => navigate('/dashboard')} 
        className="mb-6 pl-0 text-[var(--color-muted-foreground)] hover:text-[var(--color-dark-teal)] hover:bg-transparent"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Назад към таблото
      </Button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-dark-teal)] mb-2">Нова оценка</h1>
        <p className="text-[var(--color-muted-foreground)]">Попълнете данните за пациента за изчисляване на рисковия профил.</p>
      </div>

      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-8">
        
        {/* Basic Info */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--color-deep-blue)] border-b border-[var(--color-border)] pb-2">
            Основна информация
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="age">Възраст</Label>
              <Input 
                id="age" 
                type="number" 
                placeholder="e.g. 75" 
                {...register("age", { required: true })}
                className="bg-white/50 h-12 focus-visible:ring-[var(--color-deep-blue)]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="gender">Пол</Label>
              <Select onValueChange={(val: string) => setValue("gender", val)}>
                <SelectTrigger className="bg-white/50 h-12 focus:ring-[var(--color-deep-blue)]">
                  <SelectValue placeholder="Изберете пол" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Мъж</SelectItem>
                  <SelectItem value="female">Жени</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Health */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--color-deep-blue)] border-b border-[var(--color-border)] pb-2">
            Здравословно състояние
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="chronic">Брой хронични заболявания</Label>
              <Input 
                id="chronic" 
                type="number" 
                {...register("chronicConditions")}
                className="bg-white/50 h-12 focus-visible:ring-[var(--color-deep-blue)]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bmi">BMI (Индекс телесна маса)</Label>
              <Input 
                id="bmi" 
                type="number" 
                step="0.1"
                placeholder="e.g. 24.5"
                {...register("bmi")}
                className="bg-white/50 h-12 focus-visible:ring-[var(--color-deep-blue)]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobility">Мобилност</Label>
            <Select onValueChange={(val: string) => setValue("mobility", val)}>
              <SelectTrigger className="bg-white/50 h-12 focus:ring-[var(--color-deep-blue)]">
                <SelectValue placeholder="Изберете ниво на мобилност" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full">Напълно подвижен</SelectItem>
                <SelectItem value="limited">Трудно подвижен (бастун/проходилка)</SelectItem>
                <SelectItem value="wheelchair">Инвалидна количка</SelectItem>
                <SelectItem value="bedbound">На легло</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex justify-between">
              <Label>CASP-19 Score (Качество на живот)</Label>
              <span className="text-sm font-bold text-[var(--color-deep-blue)]">{caspScore} / 57</span>
            </div>
            <Slider 
              defaultValue={[19]} 
              max={57} 
              step={1} 
              onValueChange={(val: number[]) => setValue("casp", val[0])}
              className="py-4"
            />
            <p className="text-xs text-[var(--color-muted-foreground)]">По-висок резултат = по-добро качество на живот</p>
          </div>
        </section>

        {/* Social */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--color-deep-blue)] border-b border-[var(--color-border)] pb-2">
            Социални фактори
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="household">Размер на домакинството</Label>
              <Input 
                id="household" 
                type="number" 
                {...register("householdSize")}
                className="bg-white/50 h-12 focus-visible:ring-[var(--color-deep-blue)]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="partner">Партньор в домакинството</Label>
              <Select onValueChange={(val: string) => setValue("partner", val)}>
                <SelectTrigger className="bg-white/50 h-12 focus:ring-[var(--color-deep-blue)]">
                  <SelectValue placeholder="Да / Не" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Да</SelectItem>
                  <SelectItem value="no">Не</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="income">Доход (субективна оценка)</Label>
            <Select onValueChange={(val: string) => setValue("income", val)}>
              <SelectTrigger className="bg-white/50 h-12 focus:ring-[var(--color-deep-blue)]">
                <SelectValue placeholder="Как оценява финансовото си състояние?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="good">Добро / Достатъчно</SelectItem>
                <SelectItem value="average">Средно / Справя се</SelectItem>
                <SelectItem value="poor">Затруднено / Недостатъчно</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button 
            type="submit" 
            className="flex-1 bg-[var(--color-deep-blue)] hover:bg-[var(--color-deep-blue-hover)] text-white h-12 text-lg rounded-xl shadow-lg shadow-[rgba(32,87,129,0.15)]"
          >
            Изчисли риска
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => navigate('/dashboard')}
            className="flex-1 h-12 text-lg rounded-xl border-[var(--color-border)] text-[var(--color-dark-teal)]"
          >
            Отказ
          </Button>
        </div>
      </form>
    </div>
  );
}
