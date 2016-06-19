package ee.mtiitson.gradeio.model;

import lombok.*;

import javax.persistence.*;

import static javax.persistence.GenerationType.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Criterion {
    @Id
    @GeneratedValue(strategy = AUTO)
    private long id;

    @Column(nullable = false)
    private String description;

    private int score;

    public Criterion(String description) {
        this.description = description;
    }

}
