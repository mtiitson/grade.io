package ee.mtiitson.gradeio;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.Module;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.cfg.HandlerInstantiator;
import com.fasterxml.jackson.datatype.hibernate4.Hibernate4Module;
import ee.mtiitson.gradeio.model.*;
import ee.mtiitson.gradeio.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;

@SpringBootApplication
public class GradeIo {
    public static void main(String[] args) {
        SpringApplication.run(GradeIo.class, args);
    }

    @Bean
    public CommandLineRunner initializeData(CriterionRepository criterionRepository, GradeRepository gradeRepository, TeacherRepository teacherRepository, StudentRepository studentRepository, UserRepository userRepository, LabRepository labRepository) {
        return (args) -> {
            Teacher teacher = new Teacher("Õpetaja Laur");
            User teacherUser = new User("teacher@ttu.ee", "abc", new ArrayList<String>(Arrays.asList("teacher")), teacher );
            teacher.setUser(teacherUser);
            teacherRepository.save(teacher);

            Student student = new Student("Juku Ruku");
            User user = new User("student@ttu.ee", "abc", new ArrayList<>(Arrays.asList("student")), student);
            student.setUser(user);
            studentRepository.save(student);

            Student student2 = new Student("Mari Mari");
            User user2 = new User("student2@ttu.ee", "abc", new ArrayList<>(Arrays.asList("student")), student);
            student2.setUser(user2);
            studentRepository.save(student2);

            Lab lab = new Lab();
            lab.setLabName(LabName.LAB_1);
            lab.setAuthors(new HashSet<>(Arrays.asList(student, student2)));
            lab.setSubmission("http://test.ee");
            labRepository.save(lab);

            Lab lab2 = new Lab();
            lab2.setLabName(LabName.LAB_2);
            lab2.setAuthors(new HashSet<>(Arrays.asList(student, student2)));
            lab2.setSubmission("http://test.ee");
            Grade grade = new Grade();
            Criterion criterion = new Criterion();
            criterion.setDescription("Esitatud");
            criterion.setScore(1);
            grade.getCriteria().add(criterion);
            grade.setWork(lab2);
            lab2.setGrade(grade);
            criterionRepository.save(criterion);
            labRepository.save(lab2);
        };
    }


    @Bean
    public Module hibernateObjectMapperModule() {
        return new Hibernate4Module();
    }

    @Autowired
    private HandlerInstantiator handlerInstantiator;

    @Bean
    public Jackson2ObjectMapperBuilder objectMapperBuilder() {
        Jackson2ObjectMapperBuilder builder = new Jackson2ObjectMapperBuilder();
        builder.failOnUnknownProperties(false);
        builder.handlerInstantiator(handlerInstantiator);
        return builder;
    }


}
