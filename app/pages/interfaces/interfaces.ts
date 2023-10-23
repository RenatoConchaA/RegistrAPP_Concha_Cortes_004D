export interface Iusuarios{
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    sede: string;
    jornada: string;
    asignatura1: string;
    asignatura2: string;
    ano: number;
    semestre: string;
    horas_sem_asig1: number;
    horas_sem_asig2: number;
    password: string;
    isactive: boolean
}
export interface Usuario{
    nombre: string;
    apellido: string;
    email: string;
    sede: string;
    jornada: string;
    asignatura1: string;
    asignatura2: string;
    ano: number;
    semestre: string;
    horas_sem_asig1: number;
    horas_sem_asig2: number;
    password: string;
}
