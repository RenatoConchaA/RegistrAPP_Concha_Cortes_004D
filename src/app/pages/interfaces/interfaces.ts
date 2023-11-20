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
    isactive: boolean;
    rol:string;
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
    isactive: true,
    password: string;
    rol:string;
}
export interface Alumnos{
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    sede: string;
    jornada: string;
    password: string;
    isactive: boolean;
    rol:string;
}
export interface Alumno{
    nombre: string;
    apellido: string;
    email: string;
    sede: string;
    jornada: string;
    password: string;
    isactive: boolean;
    rol:string;
}
export interface Feriados{
    id:number,
    nombre:string,
    fecha: number,
    irrenunciable:string,
    tipo:string
}

export interface Feriado{
    nombre:string,
    fecha: number,
    irrenunciable:string,
    tipo:string
}

export interface InfoQR{
    id:number;
    Nombre: string;
    Asignatura: string;
    Fecha: string;
}

//post
export interface Infoqrs{
    Nombre: string;
    Asignatura: string;
    Fecha: string;
}

export interface InfoAlumnoQR{
    id:number;
    Nombre: string;
    Asignatura: string;
    Fecha: string;
}

export interface InfoAlumnoQRs{
    Nombre: string;
    Asignatura: string;
    Fecha: string;
}